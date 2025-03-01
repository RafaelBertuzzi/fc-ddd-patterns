import Notification from "./notification";

describe("Unit test for notification", () => {
  it("should create errors", async () => {
    const notification = new Notification();
    const error1 = {
      message: "error message",
      context: "customer",
    };
    notification.addError(error1);
    expect(notification.messages("customer")).toBe("customer: error message");

    const error2 = {
      message: "error message2",
      context: "customer",
    };
    notification.addError(error2);
    expect(notification.messages("customer")).toBe(
      "customer: error message, customer: error message2"
    );

    const error3 = {
      message: "error message3",
      context: "order",
    };
    notification.addError(error3);
    expect(notification.messages()).toBe(
      "customer: error message, customer: error message2, order: error message3"
    );
  });

  it("should check if notification has at least on error", async () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    };
    notification.addError(error);
    expect(notification.hasErrors()).toBe(true);
  });

  it("should get all errors props", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    };
    notification.addError(error);

    expect(notification.getErrors()).toEqual([error]);
  });
});
