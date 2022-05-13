var LeaderboardService = {
    init: function () {
        $('#success-message').attr('hidden',true);
        $('#submit-form').validate({
            submitHandler: function (form) {
                console.log(form);
                $('#submit-button').prop('disabled', true);
                var username = $("#test").val();
                var data = { username, score };
                LeaderboardService.add(data);
                $('#submit-form').attr('hidden',true);
            }
        });
    },
    
    list: function () {

        $.get("api/leaderboard/sorted", function (leaderboard) {
            
            myp5.remove();
            $('#submit-form').hide();
            $('#leaderboard').show();

            $('#leaderboard').html("");

            var html = `
            <table class = "table table-hove table-dark">
             <thead>
                <tr>
                    <th scope = "col" style = "color: green !important;">Position</th>
                    <th scope = "col" style = "color: green !important;">Username</th>
                    <th scope = "col" style = "color: green !important;">Score</th>
                </tr>
             </thead>
            <tbody>`;

            for (let i = 0; i < leaderboard.length; i++) {
                html += `
                        <tr>
                            <th scope = "row">` + i + `</th>
                            <td>`+ leaderboard[i].username + `</td>
                            <td>`+ leaderboard[i].score + `</td>
                        </tr>`;
            }

            html += "</tbody></table>";
            $('#leaderboard').html(html);

        });


    },
    add: function (data) {

        $.ajax({

            url: 'api/leaderboard',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                $('#success-message').attr('hidden',false);
            }
        });
    }
}