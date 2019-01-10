$(document).ready(function ($) {
	//open popup
	//$('.cd-popup-trigger').on('click', function(event){
	//	event.preventDefault();
	//	$('.cd-popup').addClass('is-visible');
	//});
	
	//close popup
    $('.cd-popup').on('click', function (event) {
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
    });
    $('.cd-popup2').on('click', function (event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup2')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
	//open popup
	//$('.cd-popup-trigger-3').on('click', function(event){
	//	event.preventDefault();
	//	$('.cd-popup-3').addClass('is-visible-3');
	//});
	
	//close popup
	$('.cd-popup-3').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-3') || $(event.target).is('.cd-popup-3') ) {
			event.preventDefault();
			$(this).removeClass('is-visible-3');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
	    if (event.which == '27') {
	        $('.cd-popup').removeClass('is-visible');
	        $('.cd-popup2').removeClass('is-visible');
    		$('.cd-popup-3').removeClass('is-visible-3');
	    }
	});


	$('.leave-word-close').on('click', function (event) {
	    event.preventDefault();
	    $('.leave-word').hide();
	});

});
function __firefox() {
    HTMLElement.prototype.__defineGetter__("runtimeStyle", __element_style);
    window.constructor.prototype.__defineGetter__("event", __window_event);
    Event.prototype.__defineGetter__("srcElement", __event_srcElement);
}
function __element_style() {
    return this.style;
}
function __window_event() {
    return __window_event_constructor();
}
function __event_srcElement() {
    return this.target;
}
function __window_event_constructor() {
    if (document.all) {
        return window.event;
    }
    var _caller = __window_event_constructor.caller;
    while (_caller != null) {
        var _argument = _caller.arguments[0];
        if (_argument) {
            var _temp = _argument.constructor;
            if (_temp.toString().indexOf("Event") != -1) {
                return _argument;
            }
        }
        _caller = _caller.caller;
    }
    return null;
}
if (window.addEventListener) {
    __firefox();
}
//open popup 弹出层1（获取报价）
function cdpopuptrigger(orgname, orgid, isclose3) {
    //关闭 弹出层3（机构对比及课程）
    if (isclose3 == true && isclose3) {
        $('.cd-popup-3').removeClass('is-visible-3');
    }
    if ($(".leave-word").length > 0) {
        $(".leave-word").show();
    }
    event.preventDefault();
    $('.cd-popup').addClass('is-visible');
    $("#orgid").val(orgid);
    $("#orgname").val(orgname);
}
//open popup 弹出层1（试听报价）
function cdpopuptrigger2(orgname, orgid, isclose3) {
    //关闭 弹出层3（机构对比及课程）
    if (isclose3 == true && isclose3) {
        $('.cd-popup-3').removeClass('is-visible-3');
    }
    event.preventDefault();
    $('.cd-popup2').addClass('is-visible');
    $("#orgid").val(orgid);
    $("#orgname").val(orgname);
}
//open popup 弹出层3（机构对比及课程）
function cdpopuptrigger3(popupid)
{
    //$('.cd-popup-3').removeClass('is-visible-3');
    $('#' + popupid).addClass('is-visible-3');
}
function cdpopuptrigger4(orgname, orgid, isclose3) {
    //关闭 弹出层3（机构对比及课程）
    if (isclose3 == true && isclose3) {
        $('.cd-popup-3').removeClass('is-visible-3');
    }
    event.preventDefault();
    $('.cd-popup').addClass('is-visible');
    $("#orgid").val(orgid);
    $("#orgname").val(orgname);
}
function submit_cdpopuptrigger() {
    var orgid = $("#orgid").val();
    var orgname = $("#orgname").val();
    //手机号码
    var tel = $("#tel").val();
    if (tel == "" || tel == "请填写手机号") {
        //请输入手机号码
        alert("请填写手机号");
        return false;
    } else {
        var regtel = /^(\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -/]{0,})([ -\/\\]\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -\/]{0,})*$/i;
        if (!regtel.test(tel)) {
            //手机号码错误
            alert("手机号码错误");
            return false;
        }
    }
    //当前页面url
    var currentPageUrl = escape(window.location.href);
    var remarkTag = escape("【价格咨询】");
    var leaveType = 4;//价格咨询
    var remark = "机构名称：" + orgname;
    remark = escape(remark);
    var url = "http://crm.nadiyi.cn/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark="
            + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType + "&IP=" + $("#IP").val();
    //var url = "http://192.168.5.46:1636/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark="
    //        + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType;
    $.ajax({
        type: "POST",
        url: url,
        data: {},
        dataType: 'jsonp',
        success: function (html) {
            if (html == "1") {
                alert("提交成功，客服人员稍后会与您联系！");
                $("#orgid").val("");
                $("#orgname").val("");
                $("#tel").val("");
            }
            else if (html == "-3")
                alert("客服已经收到通知，请耐心等待，无需重复留言，谢谢！");
            else
                alert("提交失败，请重试！");
        }
    });
    return true;
}
//预约试听
function submit_cdpopuptrigger2() {
    //var orgid = $("#orgid").val();
    //var orgname = $("#orgname").val();
    //手机号码
    var tel = $("#tel2").val();
    if (tel == "" || tel == "请填写手机号") {
        //请输入手机号码
        alert("请填写手机号");
        return false;
    } else {
        var regtel = /^(\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -/]{0,})([ -\/\\]\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -\/]{0,})*$/i;
        if (!regtel.test(tel)) {
            //手机号码错误
            alert("手机号码错误");
            return false;
        }
    }
    //当前页面url
    var currentPageUrl = escape(window.location.href);
    var remarkTag = escape("【预约试听】");
    var leaveType = 3;//价格咨询
    var remark = "成人口语"
    remark = escape(remark);
    var url = "http://crm.nadiyi.cn/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark="
            + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType + "&IP=" + $("#IP").val();
    //var url = "http://192.168.5.46:1636/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark="
    //        + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType;
    $.ajax({
        type: "POST",
        url: url,
        data: {},
        dataType: 'jsonp',
        success: function (html) {
            if (html == "1") {
                alert("提交成功，客服人员稍后会与您联系！");
                $("#tel2").val("");
            }
            else if (html == "-3")
                alert("客服已经收到通知，请耐心等待，无需重复留言，谢谢！");
            else
                alert("提交失败，请重试！");
        }
    });
    return true;
}
//报价计算器
function submit_zlbjjsq() {
    var curgrade = $("#lpcurgrade").val();
    var aimgrade = $("#lpaimgrade").val();
    var classtype = $("#lpclasstype").val();
    var tel = $("#lptel").val();
    if (tel == "" || tel == "请填写手机号") {
        //请输入手机号码
        alert("请填写手机号");
        return false;
    } else {
        var regtel = /^(\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -/]{0,})([ -\/\\]\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -\/]{0,})*$/i;
        if (!regtel.test(tel)) {
            //手机号码错误
            alert("手机号码错误");
            return false;
        }
    }
    var currentPageUrl = escape(window.location.href);
    var remarkTag = escape("【价格咨询】");
    var leaveType = 4;//价格咨询
    var remark = "";
    remark = "当前的分数:" + curgrade + ";";
    remark = remark + "目标分数:" + aimgrade + ";";
    remark = remark + "班型:" + classtype + ";";
    remark = escape(remark);
    var url = "http://crm.nadiyi.cn/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark="
            + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType + "&IP=" + $("#IP").val();
    //var url = "http://192.168.5.46:1636/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark="
    //        + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType;
    $.ajax({
        type: "POST",
        url: url,
        data: {},
        dataType: 'jsonp',
        success: function (html) {
            if (html == "1") {
                alert("提交成功，客服人员稍后会与您联系！");
                $("#lptel").val("");
            }
            else if (html == "-3")
                alert("客服已经收到通知，请耐心等待，无需重复留言，谢谢！");
            else
                alert("提交失败，请重试！");
        }
    });
    return true;
}
//报价计算器
function submit_zlbjjsq_cr() {
    var curgrade = $("#lpcurgrade").val();
    var aimgrade = $("#lpaimgrade").val();
    var classtype = $("#lpclasstype").val();
    var tel = $("#lptel").val();
    if (tel == "" || tel == "请填写手机号") {
        //请输入手机号码
        alert("请填写手机号");
        return false;
    } else {
        var regtel = /^(\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -/]{0,})([ -\/\\]\+?(86)?[ -\/\\]{0,1}1[0-9]{10}[ -\/]{0,})*$/i;
        if (!regtel.test(tel)) {
            //手机号码错误
            alert("手机号码错误");
            return false;
        }
    }
    var currentPageUrl = escape(window.location.href);
    var remarkTag = escape("【价格咨询】");
    var leaveType = 4;//价格咨询
    var remark = "";
    remark = "英语基础:" + curgrade + ";";
    remark = remark + "意向师资:" + aimgrade + ";";
    remark = remark + "意向班级:" + classtype + ";";
    remark = escape(remark);
    var url = "http://crm.nadiyi.cn/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark=" + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType + "&catname=" + escape("成人英语") + "&IP=" + $("#IP").val();
    //var url = "http://192.168.5.46:1636/Message/InsertLeaveMessage?jsoncallback=?&contact=&phone=" + tel + "&remarkTag=" + remarkTag + "&remark=" + remark + "&url=" + currentPageUrl + "&leaveType=" + leaveType + "&catname=" + escape("成人英语");
    $.ajax({
        type: "POST",
        url: url,
        data: {},
        dataType: 'jsonp',
        success: function (html) {
            if (html == "1") {
                alert("提交成功，客服人员稍后会与您联系！");
                $("#lptel").val("");
            }
            else if (html == "-3")
                alert("客服已经收到通知，请耐心等待，无需重复留言，谢谢！");
            else
                alert("提交失败，请重试！");
        }
    });
    return true;
}
function ClickStatisticX(ButtonName, URL, BodyName, BodyID, url) {
    ClickStatistic(ButtonName, URL, BodyName, BodyID);
    setTimeout("location.href = '" + url + "'", 1000);
}
function ClickStatistic(ButtonName, URL, BodyName, BodyID) {
    var Current_URL = window.location.href;
    if (ButtonName != "" && ButtonName != undefined)
        ButtonName = escape(ButtonName);
    if (BodyName != "" && BodyName != undefined)
        BodyName = escape(BodyName);
    var url = "http://crm.nadiyi.cn/Message/ClickStatistic?jsoncallback=?&Current_URL=" + Current_URL + "&ButtonName=" + ButtonName + "&Click_URL=" + URL + "&BodyName=" + BodyName + "&BodyID=" + BodyID + "&IP=" + $("#IP").val();
    //var url = "http://www.test.com/Message/ClickStatistic?jsoncallback=?&Current_URL=" + Current_URL + "&ButtonName=" + ButtonName + "&Click_URL=" + URL + "&BodyName=" + BodyName + "&BodyID=" + BodyID;
    $.ajax({
        type: "POST",
        url: url,
        data: {},
        dataType: 'jsonp',
        success: function (result) {
            //alert("请求成功");
            //$("#divPicContent").html(result);
            //var h1 = $("#divPicContent").height();
            //$(".html-kongdiv").css("height", h1);
        }
    });
}

function cdpopuptriggerNew(orgname, orgid, isclose3) {
    event.preventDefault();
    $('.leave-word').show();
    $("#orgid").val(orgid);
    $("#orgname").val(orgname);
}
