import Login from "./Login";

test("Create a user account.", () => {

    expect(() => Login.createAccount("testuser", "SQOg6!egAu7$vtKnr$@0", "test@example.com",
        "Bob", "Smith", "1-1-1111", "+1111111111", "boberts", "boberts",
        "This is a sample profile.")).resolves.toBeTruthy();

});

test("Login to a user account.", () => {

    expect(() => Login.login("testuser", "SQOg6!egAu7$vtKnr$@0", false)).resolves.toBeTruthy();

});

test("Remove the test user account.", () => {

    expect(() => Login.deleteUser()).resolves.toBeTruthy();

});
