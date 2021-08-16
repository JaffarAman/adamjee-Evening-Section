// alert("HELLO CLASS")

// function pageChange(){
    
//     // window.location.href = "https://www.google.com"
//     // window.location.assign("about.html")

//     // window.location.replace("https://www.google.com")

//     // var write = document.write("NEW TAB...")
//     // window.open("https://www.google.com" ,"win1" ,"width:800 , heigth:800" )

// }


function submit(){
    // var input = document.getElementById("input")
    // console.log((input.value));

    // if(input.value.length <3){
    //     alert("UserName is not Valid..")
    // }
    // else{
    //     console.log("UserName is Valid..")

    // }
    //     alert("Please select your Country")
    // }
    // else{
    //     console.log("DONE....")
    // }


    // var option  =document.getElementById("options")
    // console.log(option.selectedIndex)
    // if(option.selectedIndex == 0){
    //     alert("Please select your country")
    // }
    // else{
    //     console.log("DONE....")
    // }

    // var gender = document.getElementsByName("gender")
    // console.log(gender[1]);

    // var flag = true
    // for(var i = 0 ; i<gender.length;i++){
    //         if(gender[i].checked){
    //             console.log("CHECKED HAI....")
    //             flag = false
    //         }
    // }
    // if(flag === true){
    //         alert("Please Checked")
    // }

    var name1 = "jaffars"
    try{
        if(name1== "jaffar"){
            console.log("success");
        }else{
            throw "Jaffar is not defined"
        }
    }
    catch (error){
        console.log(error);
    }


}
