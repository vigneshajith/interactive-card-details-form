// Feed live input to the UI card
$("#username").on("input", function (e) {
  // make every word first letter to uppercase
  e.target.value = e.target.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
  console.log(e.target);
  const userName = e.target.value;
  $(".front-card__btn-text").html(userName);
  if (userName === "") {
    $(".front-card__btn-text").html("Jane Appleseed");
  }
});

$("#cardnumber").on("input", function (e) {
  // insert space after every four char/number in input field
  e.target.value = e.target.value
    .replace(/[^\dA-Z-a-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  const cardNumber = e.target.value;
  $(".front-card__numbers").html(cardNumber);

  if (cardNumber === "") {
    $(".front-card__numbers").html("0000 0000 0000 0000");
  }
});

$("#Month").on("input", function (e) {
  const mm = e.target.value;
  $(".ex-mm").html(mm);

  if (mm === "") {
    $(".ex-mm").html("00");
  }
});

$("#year").on("input", function (e) {
  const yy = e.target.value;
  $(".ex-yy").html(yy);
  if (yy === "") {
    $(".ex-yy").html("00");
  }
});

$("#cvc").on("input", function (e) {
  const cvc = e.target.value;
  $(".back-card__text").html(cvc);
  if (cvc === "") {
    $(".back-card__text").html("000");
  }
});

// Form validation on submit

$(".submit").on("click", (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  const UserName = $("#username").val();
  const CardNumber = $("#cardnumber").val();
  const month = $("#Month").val();
  const year = $("#year").val();
  const cvc = $("#cvc").val();
  const firstform = $(".firstform");
  const conform__messeage = $(".conform-messeage");

  const error1 = $("#error1");
  const error2 = $("#error2");
  const error3 = $("#error3");
  const error4 = $("#error4");
  let key = true;
  if (UserName === "") {
    error1.text("Can't be blank");
    $("#username").addClass("error");
    key = false;
  } else if (/[^A-Z-a-z]+$/.test(UserName)) {
    error1.text("Only characters")
  }
  else {
    error1.text("");
    $("#username").removeClass("error");
  }
  if (CardNumber === "") {
    error2.text("Can't be blank");
    $("#cardnumber").addClass("error");
    key = false;
  } else if (/[^0-9]+$/.test(CardNumber)) {
    error2.text("Wrong fromate only numbers");
    key = false;
  } else if (CardNumber.length < 19) {
    error2.text("Wrong fromate");
    key = false;
  } else {
    error2.text("");
    $("#cardnumber").removeClass("error");
  }

  if (month === "") {
    error3.text("Can't be blank");
    $("#Month").addClass("error");
    key = false;
  } else {
    error3.text("");
    $("#Month").removeClass("error");
  }
  if (year === "") {
    error3.text("Can't be blank");
    $("#year").addClass("error");
    key = false;
  } else {
    error3.text("");
    $("#year").removeClass("error");
  }
  if (month === "" || year === "") {
    error3.text("Can't be blank")
  }
    if (
      (month.length != 0 && month.length < 2) ||
      (month.length != 0 && year.length < 2)
    ) {
      error3.text("Wrong fromate");
      key = false;
      if (month.length < 2) {
        $("#Month").addClass("error");
      }
      if (year.length < 2) {
        $("#year").addClass("error");
      }
    }

  if (cvc === "") {
    error4.text("Can't be blank");
    $("#cvc").addClass("error");
    key = false;
  } else if (cvc.length < 3) {
       error4.text("Wrong fromate");
       $("#cvc").addClass("error");
       key = false;
  }
  else {
    error4.text("");
    $("#cvc").removeClass("error");
  }
  if (key == true) {
    firstform.addClass("display");
    conform__messeage.removeClass("display")
  }
}
