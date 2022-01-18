const chai = window.chai;
const expect = chai.expect;

describe("/test", () => {
  it("Should hit the test endpoint of task database", async () => {
    let response = await fetch("http://localhost:8070/test");
    let json = await response.json();
    expect(json.message).to.equal("test endpoint successful!");
  });
});

describe("/employer/register", () => {
  it("Should hit the register endpoint of task database and register a new employer", async () => {
    let response = await fetch("http://localhost:8070/8738/register", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: "cmoody123@gmail.com",
        firstName: "sally",
        lastName: "may",
        password: "password123",
        position: "the boss",
        key: "nj38j193",
      }),
    });
    let json = await response.json();

    if (json.message === "email or email already in use") {
        expect(json.message).to.deep.equal("email or email already in use")
      } else {
        expect(json.message).to.deep.equal("user registered");
      }
  
  });
});

