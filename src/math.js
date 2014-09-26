function click_num(e)
{
    var prev = $('#answer').html();
    var val = prev + $(e).html();
    $('#answer').html(val);
    $('#result_ok').html("");
    $('#result_err').html("");
}

function click_del(e)
{
    var prev = $('#answer').html();
    var val = prev.substring(0,prev.length-1);
    $('#answer').html(val);
    $('#result_ok').html("");
    $('#result_err').html("");
}

function click_ok()
{
    var exam = $('#exam').html();
    var val = eval(exam.substring(0,exam.length-1));
    var result = $('#answer').html();
    if(eval(val) == eval(result)){
        $('#result_ok').html("OK");
        $('#result_err').html("");
        set_exam();
    }
    else{
        $('#result_ok').html("");
        $('#result_err').html("Error");
    }
}

function set_exam()
{
    var a = Math.floor((Math.random() * 20) + 1);
    var b = Math.floor((Math.random() * 10) + 1);
    var exam = a + " + " + b + " =";
    $('#exam').html(exam);
    $('#answer').html("");
}