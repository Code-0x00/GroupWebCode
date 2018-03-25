/**
 * Created by Xiao Haoquan on 2017/1/29.
 */

function urlListNavigation(){
	data=[
	{"keyword":"团队简介","url":"index.html"},
	{"keyword":"团队成员","url":"members.html"},
	{"keyword":"课程设置","url":"lesson.html"},
	{"keyword":"成果展示","url":"publications.html"},
	{"keyword":"学生相册","url":"photos.html"},
	{"keyword":"学术活动","url":"teachings.html"},
	{"keyword":"组会安排","url":"seminar.html?20180"},
	{"keyword":"招生公告","url":"announcement.html"},
	];
	var oUl=document.getElementById("Navigation");
	for(i in data){
		var oLi=document.createElement("li");
		var oA=document.createElement("a");
		oA.innerHTML=data[i].keyword;
		oA.setAttribute("href",data[i].url);
		oA.id=i;
		oLi.appendChild(oA);
		oUl.appendChild(oLi);
	}
}

urlListNavigation();