$(document).ready(function () {

    $('#form1').validate({
        rules:{
            phone:{
               
                required: true,
            
                number:true,
            }
            
        },
        messages:{
            phone:{
                digits:"Please Write A Number Valid",
                required:"Please Write Your Telephone Number",
                max:"I Don't Know What Write In Here",
                date:"Please Write Month/Date/Year"
            }
        }
    });










    // var $idContent = $('#content'),
    //     elButton = $('#showData'),
    //     $idListUser = $('#listUser');

    // elButton.on('click', function () {
    //     //demo debug

    //     var $idNumber = $('#number').val();

    //     if ($idNumber == 5) {
    //         // send Request Ajax load Data.json

    //         $.ajax({
    //             url: 'js/data.json',
    //             statusCode: {
    //                 404: function(){
    //                     console.log('Can Not Connect With File');
    //                     alert('Hello World');
    //                 }
    //             }
    //         })
    //         .done(function (data) {
    //             var elLi;
    //             $.each(data, function (result) {
    //                 elLi = '<li>' + result.first_name + ' '+ result.email + '</li>';
    //                 $idListUser.append(elLi);
    //             })
    //         })
    //         .fail(function () {
    //             $idListUser.append('<li>ERRORRRRRRR</li>');
    //         })
    //         .error(function() {
    //             alert(' You Can Never Die');
    //         });



    //     } else {
    //         $idContent.text('PLEASE ENTER NUMBER 5 AND SUBMIT');
    //     }

    // });
    

});