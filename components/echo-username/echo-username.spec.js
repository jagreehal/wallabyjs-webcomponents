describe("when using echo-username", function() {
  let element;

  beforeEach(function() {
    element = document.createElement("echo-username");
  });

  afterEach(function() {
    document.body.removeChild(element);
  });

  it("should just say Hi", function() {
    // arrange
    // act
    document.body.appendChild(element);

    // assert
    expect("<div>Hi</div>").toBe(element.innerHTML);
  });

  it("should say Hi <username>", function() {
    // arrange
    let username = document.createAttribute("username");
    username.value = "Jag";
    element.setAttributeNode(username);

    // act
    document.body.appendChild(element);

    // assert
    expect("<div>Hi Jag</div>").toBe(element.innerHTML);
  });

  it("can change username", function() {
    // arrange
    document.body.appendChild(element);
    let username = document.createAttribute("username");
    username.value = "JagV2";
    element.setAttributeNode(username);

    // act

    // assert
    expect("<div>Hi JagV2</div>").toBe(element.innerHTML);
  });
});
