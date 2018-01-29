$("#add_user").on('click', function () {
    console.log($(this));
    $.ajax({
        url: '/add/user',
        type: 'post',
        data: $("#user_form").serialize(),
        dataType: 'json',
        success: function () {
            console.log("添加成功")
        },
        error: function () {
            console.log("添加失败")
        }
    })
});

$("#upload_file").on('click', function () {
    $.ajax({
        url: 'file_upload',
        type: 'post',
        data: $("#user_form").serialize(),
        dataType: 'json',
        success: function () {
            console.log("添加成功")
        },
        error: function () {
            console.log("添加失败")
        }
    })
});