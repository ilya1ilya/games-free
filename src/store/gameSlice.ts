import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Screenshot = Record<"id" | "image", string>;

type MinimumSystemRequirements = Record<
  "os" | "processor" | "memory" | "graphics" | "storage",
  string
>;

type SpecificGame = {
  id: string;
  title: string;
  release_date: string;
  thumbnail: string;
  genre: string;
  publisher: string;
  developer: string;
  screenshots: Screenshot[];
  minimum_system_requirements: MinimumSystemRequirements;
};

type SpecificGameState = {
  data: Partial<SpecificGame>; // костыль
  loading: boolean;
  error: boolean | null;
};

export const fetchSpecificGameInfo = createAsyncThunk<
  SpecificGame,
  string,
  { rejectValue: string }
>(
  "specificGame/fetchSpecidicGameInfo",
  async function (id, { rejectWithValue }) {
    const response = await fetch(
      `https://www.freetogame.com/api/game?id=${id}`
    );

    if (!response.ok) {
      return rejectWithValue("Failed to fetch specific game info");
    }

    const data = await response.json();

    return data;
  }
);

const initialState: SpecificGameState = {
  data: {},
  loading: false,
  error: null,
};

const specificGameSlice = createSlice({
  name: "specificGame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecificGameInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpecificGameInfo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSpecificGameInfo.rejected, (state) => {
        state.error = true;
      });
  },
});

export default specificGameSlice.reducer;
