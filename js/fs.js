$(document).ready(function () {
    $('form').submit(function () {
        event.preventDefault();
        var formID = $(this).attr('id'); // Получение ID формы
        var form = $('#' + formID);





        $.ajaxSetup({
            headers: {
               //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });


        $.ajax({
            // метод отправки
            type: "POST",
            // путь до скрипта-обработчика
            url: "http://spinner-go.ru/mail",
            // какие данные будут переданы
            data: form.serialize(),
            // тип передачи данных
            dataType: "json",
            // действие, при ответе с сервера
            success: function(data){
                // в случае, когда пришло success. Отработало без ошибок
                if(data.result == 'success'){
                    alert(data.post);



                }else{
                    // вывод сообщения об ошибке
                    alert("Ошибка");
                }
            }
            //ajax
        });

























 //submit
    });
//redy
});



