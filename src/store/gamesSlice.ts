import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

type Game = {
  id: string;
  title: string;
  release_date: string;
  thumbnail: string;
  genre: string;
  platform: string;
  publisher: string;
};

type GamesState = {
  list: Game[];
  settings: {
    currentGenre: string;
    currentPlatform: string;
    sortByOption: string;
  };
  loading: boolean;
  error: boolean | null;
};

export const fetchGames = createAsyncThunk<
  Game[],
  undefined,
  { rejectValue: string; state: RootState }
>("games/fetchGames", async function (_, { rejectWithValue, getState }) {
  const { currentGenre, currentPlatform, sortByOption } =
    getState().games.settings;

  const genre = currentGenre === "all" ? "" : `category=${currentGenre}&`;
  const platform =
    currentPlatform === "all" ? "" : `platform=${currentPlatform}&`;
  const sortBy = sortByOption === "relevance" ? "" : `sort-by=${sortByOption}&`;

  const response = await fetch(
    `https://www.freetogame.com/api/games?${genre}${platform}${sortBy}`
  );

  if (!response.ok) {
    return rejectWithValue("Server error has occurred");
  }

  const data = await response.json();

  return data;
});

const initialState: GamesState = {
  list: [],
  settings: {
    currentGenre: "all",
    currentPlatform: "all",
    sortByOption: "relevance",
  },
  loading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    updateSettings(
      state,
      action: PayloadAction<{
        settingName: keyof GamesState["settings"];
        value: string;
      }>
    ) {
      const { settingName, value } = action.payload;
      state.settings[settingName] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { updateSettings } = gamesSlice.actions;

export default gamesSlice.reducer;
