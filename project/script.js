let userText1;
let token1;
let firstObjectsArray = [];
let secondObjectsArray = [];
let userText2;
let token2;


//Get User Text-1
$("#submit-1").click(function () {

    $(".list").addClass("active");

    userText1 = $("#text-1").val();
    token1 = userText1.split(" ");

    $.each(token1, function(index, token) {
        let obj = {};
        obj.tokenName = token;
        obj.num = 1;
        firstObjectsArray.push(obj);
    });

    renderList1();
    sortList();
    renderList2();

});
//End of Get User Text-1

//Get User Text-2
$("#submit-2").click(function () {

    $(".list").addClass("active");

    userText2 = $("#text-2").val();
    token2 = userText2.split(" ");

    $.each(token2, function(index, token) {
        let obj = {};
        obj.tokenName = token;
        obj.num = 2;
        firstObjectsArray.push(obj);
    });

    renderList1();
    sortList();
    renderList2();

});
//End of Get User Text-2

//Render First list
function renderList1 () {

    $("#list-1").html(``);

    for (let i = 0; i < firstObjectsArray.length; i++) {
        $("#list-1").append(`<li>
        <span class="name">`+ firstObjectsArray[i].tokenName +`</span>
        <span class="num">`+ firstObjectsArray[i].num +`</span>
    </li>`)
    }

}
//End of Render First list

//Sort list
function sortList () {

    let temporaryObject = $.extend(true, [], firstObjectsArray);
    secondObjectsArray = temporaryObject.sort(function (a, b) {
        let nameA = a.tokenName.toLowerCase();
        let nameB = b.tokenName.toLowerCase();
        let numA = a.num;
        let numB = b.num;

        if (nameA < nameB) return -1;

        if (nameA > nameB) return 1;

        return numA - numB;
    });

    console.log(secondObjectsArray);

}
//End of Sort list

//Render Second list
function renderList2 () {

    $("#list-2").html(``);

    for (let i = 0; i < secondObjectsArray.length; i++) {
        $("#list-2").append(`<li>
        <span class="name">`+ secondObjectsArray[i].tokenName +`</span>
        <span class="num">`+ secondObjectsArray[i].num +`</span>
    </li>`)
    }

}
//End of Render Second list