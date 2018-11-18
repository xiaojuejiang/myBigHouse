$(function () {

    $('#btn').on('click', function () {

        let user = $('#user').val()

        let comment = $('#comment').val()

        $.ajax({
            type: 'post',
            url: '/post/insert',
            data: {
                user: user,
                comment: comment
            },
            success: function (res) {
                if (res == 'success') {
                    location.href = 'index.html'

                }
            }
        })

    })

})