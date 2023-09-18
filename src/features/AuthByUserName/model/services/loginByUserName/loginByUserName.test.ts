import axios from "axios";
import { loginByUserName } from "./loginByUserName";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);
describe("getLoginByUserName.test", () => {
  const userValue = { username: "123", id: "1" };

  test("succsess", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUserName);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  //   test("rejected", async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //     const thunk = new TestAsyncThunk(loginByUserName);
  //     const result = await thunk.callThunk({ error: "403" });
  //     expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("rejected");
  //   });
});
