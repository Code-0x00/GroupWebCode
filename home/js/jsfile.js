/**
 * Created by Xiao Haoquan on 2017/1/29.
 */

$(document).ready(function () {
 
    var array = [

        /*宣琦*/    "本人主要从事社交网络数据挖掘、计算机视觉、人工智能及模式识别算法设计等研究。在计算机领域A类顶会ICSE及FSE、Physical Review E（美国物理评论）、IEEE TASE、Chaos等国际知名会议及期刊上发表学术论文40余篇，获得2014年度ACM杰出论文提名奖；近十年一直从事数据挖掘方面的研究工作，已对中国的豆瓣网、UUCall网络电话，以及美国的Apache软件基金会、StackeExchange问答网站等用户大数据进行了分析；主持3项国家自然科学基金及5项企业横向项目。目前担任中国工业与应用数学学会复杂系统与复杂网络专委会委员、中国指挥与控制学会网络科学与工程专委会委员、中国计算机学会软件工程专委会委员；担任TKDE、CHAOS、PLOS ONE等国际SCI期刊审稿人。",
        /*陈晋音*/  "本人主要从事视频图像数据挖掘、人工免疫计算、粒子群计算、遗传算法等智能计算方法，人工智能及模式识别算法设计等研究。在计算机与控制领域JCR一区INS及SCI收录其他期刊AMIS、MPE，EI收录期刊《自动化学报》、《控制理论与应用》等期刊发表学术论文20余篇。从2009年从事数据挖掘研究至今，主持国家自然科学青年基金1项、浙江省自然科学基金2项、教育厅项目1项、企业合作横向3项，参与国家及省部级项目5项。",
        /*胡鸿翔*/  "本人主要从事多智能体系统的群集行为、复杂网络的同步性、切换系统的稳定性等领域的研究。以第一作者身份在IEEE Transactions on Circuits and Systems-I: Regular Papers, System &amp; Control Letters, IET Control Theory &amp; Applications, Nonlinear Analysis: Hybrid Systems, Journal of the Franklin Institute等国际权威期刊发表论文10余篇。从2009年从事多智能体系统研究至今，主持国家自然科学青年基金1项、中国博士后基金面上项目1项，浙江省自然科学基金1项、企业横向基金2项目，并作为主要成员参与国家自然科学面上项目3项。目前担任中国指挥与控制学会网络科学与工程专委会委员、中国系统仿真学会智能物联系统建模与仿真专委会委员。",

        /*吴哲夫*/  "讲授数据通信网络相关本科研究生课程，承担留学生专业建设和管理工作，已培养硕士研究生20余名；发表论文和专利20余篇，主持工程应用项目10余项；目前担任《电信科学》《通信学报》《传感技术学报》等审稿人。主要研究兴趣包括数据通信网络、无线室内定位、增强现实可视化、网络化人工智能等相关研究和应用软件开发。",
        /*翔云*/    "最近主要研究方向是物联网大数据分析，传感器网络相关算法，以及物联网相关应用等。目前发表SCI索引论文13篇。",
        /*郑雅羽*/  "2002年就读于浙江大学电子信息及仪器专业，师从陈耀武教授。2008年浙江大学博士毕业后，就职于浙江工业大学，浙江省嵌入式系统联合重点实验室。近15年来一直专注于机器视觉、视频处理、嵌入式应用、物联网系统等领域，具有深厚的理论功底以及丰富的产品开发经验",
        /*朱威*/    "本人的主要研究方向为视频编码传输、机器视觉和嵌入式系统。其中视频编码传输方向主要对高分辨率视频和三维视频的视觉感知编码、快速并行编码和异构网络传输展开研究；机器视觉方向主要利用机器学习技术和图像处理技术对工农业自动化领域的视频图像进行检测识别和智能分析，机器换人提高生产效率；嵌入式系统方向主要是基于高性能嵌入式处理器开发音视频为主的应用系统，包括嵌入式音视频系统硬件设计、基于FPGA的音视频前端处理软件开发、基于DSP的视频图像算法软件开发、以及基于ARM的Linux应用软件开发，采用的嵌入式处理器包括TI公司的DaVinci系列处理器和C66x系列多核处理器、华为海思公司的Hi35xx系列SoC处理器、以及Xilinx公司的Spartan系列FPGA处理器。任职以来主持国家自然科学基金1项、浙江省自然科学基金2项、横向课题6项，发表SCI/EI检索论文20余篇，授权发明专利10余项。",

        /*傅晨波*/  "本人主要从事社交网络数据挖掘，复杂网络动力学，人工智能及模式识别算法设计等研究。在Physical Review E, Physica A等期刊上发表学术论文10余篇；主持1项国家自然科学基金、1项国家博士后科学基金、1项省自然科学基金，参与1项国家自然科学基金面上项目。",
        /*阮中远*/  "本人主要研究方向为复杂网络上的动力学行为，包括流行病传播，信息传播，人类行为动力学等。在国际权威期刊上发表多篇学术论文，包括Physical Review Letters, Scientific Reports, Physical Review E等。目前主持国家自然科学基金一项。",
        /*俞山青*/  "本人研究领域为：智能交通，数据挖掘，智能计算和大规模机器学习。留学和工作期间曾参与和三星、丰田等公司的横向合作项目，致力于将数据挖掘算法与基于进化型遗传算法的智能计算技术应用于视频推荐、交通仿真和大规模路网优化等不同领域。目前发表外文期刊学术论文（SCI和EI）5篇， 发表国际会议论文（EI）13篇。",
        /*徐东伟*/  "本人研究领域为：智能交通系统、道路交通信息处理和机器学习。作为骨干人员参与了道路交通领域的国家“863”项目3项、国家自然科学基金2项，在道路交通大数据的处理与应用方面积累了丰富的科研经验。目前以第一作者发表相关论文11篇（其中SCI期刊论文8篇、EI论文2篇、核心期刊1篇）、授权发明专利4项，以第三作者出版专著《城市道路交通状态感知、评价与服务》。",

        /*汤一平*/  "本人主要从事计算机视觉、物联网、智能检测与传感、全方位视觉传感、以人为中心的动态图像理解、普适计算等方面的研究。近年来在国内外的杂志和会议上发表论文100余篇，三大索引论文50余篇，出版多本专著。授权发明专利100余项，多次获得省级科技成果奖。近十年连续多年被评为学院科研先进个人和先进，2007年被评为浙江工业大学优秀教师，2009年被评为浙江工业大学三育人先进个人，2010年和2015年两次浙江工业大学研究生我心目中的好导师，浙江省首届高校优秀教师，在国外企业工作期间担任过项目负责人、企业技术负责人。",
        /*杨东勇*/  "现任浙江工业大学信息工程学院党委书记，曾任软件学院副院长。1996-1997年日本足利工业大学访问学者。2001-2002年日本筑波大学访问学者。美国电子与电气工程师学会（IEEE）高级会员、中国计算机学会高级会员、浙江省计算机用户协会理事、浙江省接受国内访问学者导师、浙江省重大科技专项咨询专家、浙江省高校中青年学科带头人.曾获浙江省人民政府优秀教学成果二等奖两次、浙江工业大学优秀教学成果一等奖两次、二等奖一次。主持和参加完成了国家自然科学基金、国家863项目、航空科学基金、浙江省自然科学基金和浙江省科技厅等20多项纵向和横向项目。在《自动化学报》、《仪器仪表学报》、《传感技术学报》、《机器人》、《计算机工程》、《计算机工程与应用》、《计算机应用》等核心刊物和IEEE 等重要会议上发表学术论文60余篇，其中三大索引论文30多篇次。",

        ];

//第二排
    var a = document.querySelectorAll(".p-toggle")[0];
    var b = document.querySelectorAll(".introduce")[0];
    var c = document.querySelectorAll(".p-work")[0];
    var d = document.querySelectorAll(".p-education")[0];
	for (var i = 0; i < 4; i++) {
        ~function (p) {
            function aa() {
                for (var o = 0; o < list[p].length; o++) {
                    var r = document.createElement("li");
                    r.innerHTML = '<div style="width:150px;">' + list[p][o].time + '</div>'  + list[p][o].school + "&nbsp;&nbsp;&nbsp;" + list[p][o].part + "&nbsp;&nbsp;&nbsp;" + list[p][o].career;
                    c.appendChild(r);
                }
                for (var v = 0; v < liste[p].length; v++) {
                    var e = document.createElement("li");
                    e.innerHTML = '<div style="width: 150px">'+liste[p][v].time +'</div>' + liste[p][v].school + "&nbsp;&nbsp;&nbsp;" + liste[p][v].part +"&nbsp;&nbsp;&nbsp;"+liste[p][v].major +"&nbsp;&nbsp;&nbsp;" + liste[p][v].career;
                    d.appendChild(e);
                }
            }

            $(".p-button-" + (p + 1)).click(function () {

                console.log(p);
                function bb()
                {
                    c.innerHTML="";
                    d.innerHTML="";
                }
                function cc()
                {
                    $(".p-button-" + (p + 1)).children("span").toggleClass("glyphicon-eject glyphicon-chevron-down");
                }


                if (a.style.display == "none" || a.style.display == "") {
                    b.innerHTML = array[p];
                    aa();
                    setTimeout(cc,500);


                    $(".p-toggle").slideToggle("slow");

                }
                else if (b.innerHTML == array[p]) {

                    $(".p-toggle").slideToggle("slow");
                    setTimeout(bb,300);
                    setTimeout(cc,500);

                }
                else {

                    bb();
                    a.style.display = "none";
                    c.innerHTML = "";
                    aa();
                    b.innerHTML = array[p];
                    $(".p-toggle").slideToggle("slow");

                    for(var n=0;n<4;n++) {
                        $(".p-button-" + (n+1)).children("span").removeClass("glyphicon-eject").addClass("glyphicon-chevron-down");
                    }
					
                    cc();
                }

            });

        }(i);
    }

//第三排
    var a1 = document.querySelectorAll(".p-toggle-1")[0];
    var b1= document.querySelectorAll(".introduce")[1];
    var c1 = document.querySelectorAll(".p-work")[1];
    var d1 = document.querySelectorAll(".p-education")[1];
    for (var t = 4; t < 8; t++) {
        ~function (z) {
            function aa() {
                for (var o = 0; o < list[z].length; o++) {
                    var r = document.createElement("li");
                    r.innerHTML = '<div style="width:150px;">' + list[z][o].time + '</div>'  + list[z][o].school + "&nbsp;&nbsp;&nbsp;" + list[z][o].part + "&nbsp;&nbsp;&nbsp;" + list[z][o].career;
                    c1.appendChild(r);
                }
                for (var v = 0; v < liste[z].length; v++) {
                    var e = document.createElement("li");
                    e.innerHTML = '<div style="width: 150px">'+liste[z][v].time +'</div>' + liste[z][v].school + "&nbsp;&nbsp;&nbsp;" + liste[z][v].part +"&nbsp;&nbsp;&nbsp;"+liste[z][v].major +"&nbsp;&nbsp;&nbsp;" + liste[z][v].career;
                    d1.appendChild(e);
                }
            }

            $(".p-button-" + (z + 1)).click(function () {

                console.log(z);
                function bb()
                {
                    c1.innerHTML="";
                    d1.innerHTML="";
                }
                function cc()
                {
                    $(".p-button-" + (z + 1)).children("span").toggleClass("glyphicon-eject glyphicon-chevron-down");
                }


                if (a1.style.display == "none" || a1.style.display == "") {
                    b1.innerHTML = array[z];
                    aa();
                    setTimeout(cc,500);


                    $(".p-toggle-1").slideToggle("slow");

                }
                else if (b1.innerHTML == array[z]) {

                    $(".p-toggle-1").slideToggle("slow");
                    setTimeout(bb,300);
                    setTimeout(cc,500);



                }
                else {
                    bb();
                    a1.style.display = "none";
                    c1.innerHTML = "";
                    aa();
                    b1.innerHTML = array[z];
                    $(".p-toggle-1").slideToggle("slow");
                    for(var n=0;n<4;n++) {
                        $(".p-button-" + (n+5)).children("span").removeClass("glyphicon-eject").addClass("glyphicon-chevron-down");
                    }

                    cc();
                }

            });

        }(t);
    }

//第四排
    var a2 = document.querySelectorAll(".p-toggle-2")[0];
    var b2= document.querySelectorAll(".introduce")[2];
    var c2 = document.querySelectorAll(".p-work")[2];
    var d2 = document.querySelectorAll(".p-education")[2];
    for (var w = 8; w < 12; w++) {
        ~function (z) {
            function aa() {
                for (var o = 0; o < list[z].length; o++) {
                    var r = document.createElement("li");
                    r.innerHTML = '<div style="width:150px;">' + list[z][o].time + '</div>'  + list[z][o].school + "&nbsp;&nbsp;&nbsp;" + list[z][o].part + "&nbsp;&nbsp;&nbsp;" + list[z][o].career;
                    c2.appendChild(r);
                }
                for (var v = 0; v < liste[z].length; v++) {
                    var e = document.createElement("li");
                    e.innerHTML = '<div style="width: 150px">'+liste[z][v].time +'</div>' + liste[z][v].school + "&nbsp;&nbsp;&nbsp;" + liste[z][v].part +"&nbsp;&nbsp;&nbsp;"+liste[z][v].major +"&nbsp;&nbsp;&nbsp;" + liste[z][v].career;
                    d2.appendChild(e);
                }
            }

            $(".p-button-" + (z + 1)).click(function () {

                console.log(z);
                function bb()
                {
                    c2.innerHTML="";
                    d2.innerHTML="";
                }
                function cc()
                {
                    $(".p-button-" + (z + 1)).children("span").toggleClass("glyphicon-eject glyphicon-chevron-down");
                }


                if (a2.style.display == "none" || a2.style.display == "") {
                    b2.innerHTML = array[z];
                    aa();
                    setTimeout(cc,500);


                    $(".p-toggle-2").slideToggle("slow");

                }
                else if (b2.innerHTML == array[z]) {

                    $(".p-toggle-2").slideToggle("slow");
                    setTimeout(bb,300);
                    setTimeout(cc,500);



                }
                else {
                    bb();
                    a2.style.display = "none";
                    c2.innerHTML = "";
                    aa();
                    b2.innerHTML = array[z];
                    $(".p-toggle-2").slideToggle("slow");
                    for(var n=0;n<4;n++) {
                        $(".p-button-" + (n+8)).children("span").removeClass("glyphicon-eject").addClass("glyphicon-chevron-down");
                    }

                    cc();
                }

            });

        }(w);
    }
	
//顾问团：第一排
    var a3 = document.querySelectorAll(".p-toggle-4")[0];
    var b3= document.querySelectorAll(".introduce-4")[0];
    var c3 = document.querySelectorAll(".p-work-4")[0];
    var d3 = document.querySelectorAll(".p-education-4")[0];
	console.log(document.querySelectorAll(".p-toggle-4")[0],document.querySelectorAll(".introduce")[0],document.querySelectorAll(".p-work")[0],document.querySelectorAll(".p-education")[0])
    
    for (var l = 11; l < 14; l++) {
        ~function (z) {
            function aa() {
                for (var o = 0; o < list[z].length; o++) {
                    var r = document.createElement("li");
                    r.innerHTML = '<div style="width:150px;">' + list[z][o].time + '</div>'  + list[z][o].school + "&nbsp;&nbsp;&nbsp;" + list[z][o].part + "&nbsp;&nbsp;&nbsp;" + list[z][o].career;
                    c3.appendChild(r);
                }
                for (var v = 0; v < liste[z].length; v++) {
                    var e = document.createElement("li");
                    e.innerHTML = '<div style="width: 150px">'+liste[z][v].time +'</div>' + liste[z][v].school + "&nbsp;&nbsp;&nbsp;" + liste[z][v].part +"&nbsp;&nbsp;&nbsp;"+liste[z][v].major +"&nbsp;&nbsp;&nbsp;" + liste[z][v].career;
                    d3.appendChild(e);
                }
            }

            $(".p-button-" + (z + 1)).click(function () {

                console.log(z);
                function bb()
                {
                    c3.innerHTML="";
                    d3.innerHTML="";
                }
                function cc()
                {
                    $(".p-button-" + (z + 1)).children("span").toggleClass("glyphicon-eject glyphicon-chevron-down");
                }


                if (a3.style.display == "none" || a3.style.display == "") {
                    b3.innerHTML = array[z];
                    aa();
                    setTimeout(cc,500);


                    $(".p-toggle-4").slideToggle("slow");

                }
                else if (b3.innerHTML == array[z]) {

                    $(".p-toggle-4").slideToggle("slow");
                    setTimeout(bb,300);
                    setTimeout(cc,500);



                }
                else {
                    bb();
                    a3.style.display = "none";
                    c3.innerHTML = "";
                    aa();
                    b3.innerHTML = array[z];
                    $(".p-toggle-4").slideToggle("slow");
                    for(var n=0;n<2;n++) {
                        $(".p-button-" + (n+12)).children("span").removeClass("glyphicon-eject").addClass("glyphicon-chevron-down");
                    }

                    cc();
                }

            });

        }(l);
    }

});


var list = [


    [{                                                   //宣琦
    time: "2017/01至今",
    school: "浙江工业大学",
    part: "信息工程学院",
    career: "研究员"
}, {
    time: "2010/08-2016/12",
    school: "浙江工业大学",
    part: "信息工程学院",
    career: "副研究员"
}, {
    time: "2015/07-2015/08 ",
    school: "美国加州大学戴维斯分校",
    part: "计算机科学系",
    career: "访问学者"
}, {
    time: "2012/06-2014/06 ",
    school: "美国加州大学戴维斯分校",
    part: "计算机科学系",
    career: "博士后"
}, {
    time: "2010/03-2010/05",
    school: "香港城市大学",
    part: "电子工程系",
    career: "访问学者"
    },{
        time: "2008/07-2010/07",
        school: "浙江大学",
        part: "信息与通信工程流动站  ",
        career: "博士后"
    }],

    [{                                                   //陈晋音
        time: "2012/09至今",
        school: "浙江工业大学",
        part: "信息工程学院",
        career: "副教授"
    },
        {
            time: "2009/07-2012/08",
            school: "浙江工业大学",
            part: "信息工程学院",
            career: "讲师"
        }],

    [{                                                   //胡鸿翔
        time: "2017.01-至今",
        school: "杭州电子科技大学",
        part: "理学院",
        career: "副教授"
    },
        {
            time: "2013.09-2016.12",
            school: "杭州电子科技大学",
            part: "理学院",
            career: "讲师"
        }],

    [{                                                  //吴哲夫
        time: "2002年至今",
        school: "浙江工业大学",
        part: "光纤通信研究所 ",
        career: "副教授"
    }],

    [{                                                  //翔云
        time: "2014/6-至今 ",
        school: "浙江工业大学",
        part: " 信息工程学院",
        career: "副教授"
    },
        {
            time: "2009/1-2014/5  ",
            school: "密歇根大学  ",
            part: " ",
            career: "博士"
        }],

    [{                                                 //郑雅羽
        time: "2002-2008",
        school: "浙江大学",
        part: "电子信息及仪器专业",
        career: "师从陈耀武教授"
    }, {
        time: "2008至今",
        school: "浙江工业大学",
        part: "浙江省嵌入式系统联合重点实验室",
        career: ""
    }, {
        time: "近十五年",
        school: "专注于机器视觉、视频处理、嵌入式应用、物联网系统等领域，具有深厚的理论功底以及丰富的产品开发经验",
        part: "",
        career: ""
    }],

    [{                                                  //朱威
        time: "2016/01至今",
        school: "浙江工业大学",
        part: "信息工程学院",
        career: "副教授"

    }, {
        time: "2011/03-2015/12",
        school: "浙江工业大学",
        part: "信息工程学院",
        career: "讲师"
    }],

	[{                                                 //傅晨波
        time: "2013/01-至今",
        school: "浙江工业大学",
        part: "信息工程学院",
        career: "讲师"
    },
        {
            time: "2014/05-2014/07",
            school: "美国加州大学戴维斯分校",
            part: "计算机科学系",
            career: "访问学者"
        }],

    [{                                                 //阮中远
        time: "2015.11-至今",
        school: "浙江工业大学",
        part: "计算机科学与技术学院",
        career: "讲师"
    },
        {
            time: "2013.9-2015.8",
            school: "匈牙利布达佩斯技术与经济大学&中欧大学",
            part: "",
            career: "博士后研究员"
        }],

    [{                                                //俞山青
        time: "2013.5-至今",
        school: "浙江工业大学",
        part: "信息工程学院",
        career: "讲师"
    },
        {
            time: "2011/9-2013/5",
            school: "早稻田大学",
            part: "",
            career: "博士后 "
        }],
		[{                                                 //徐东伟
        time: "2014.4-至今",
        school: "浙江工业大学",
        part: "信息工程学院",
        career: "讲师"
    },
        {
            time: "2008.9-2014.4",
            school: "北京交通大学",
            part: "交通安全工程",
            career: "博士"
        }],
    [{                                                    //汤一平
        time: "2017-至今",
        school: "银江股份有限公司 ",
        part: " ",
        career: "顾问"
    },{
        time: "2000-2016",
        school: " 浙江工业大学 ",
        part: " 信息工程学院",
        career: "任教"
    },{
        time: "1995-2000 ",
        school: "日本富士通系统创造公司  ",
        part: " ",
        career: "从事软件开发和项目管理工作"
    }],
    [{                                                    //杨东勇
        time: "2001–至今",
        school: "浙江工业大学",
        part: " ",
        career: "教授"
    },{
        time: "1995–2001",
        school: "浙江工业大学",
        part: " 计算机科学与技术学院",
        career: "副教授"
    }]

];

var liste = [



    [{
    time: "2003/09-2008/06",                            //宣琦老师
    school: "浙江大学",
    part: "信息学部",
    major: "控制科学与工程学系",
    career: "博士"
    }, {
    time: "1999/09-2003/06",
    school: "浙江大学",
    part: "信息学部",
    major: "控制科学与工程学系",
    career: "本科"
    }],

    [{                                                  //陈晋音老师
        time: "2004/09-2009/06",
        school: "浙江工业大学",
        part: "信息学院 ",
        major: "控制科学与控制工程系",
        career: "博士"
    }, {
            time: "2005/09-2006/08",
            school: "日本足利工业大学",
            part: "",
            major: "情报学科",
            career: "交换生"
    }, {
            time: "2000/09-2004/06",
            school: "浙江工业大学",
            part: "信息学院 ",
            major: "计算机科学与技术系",
            career: "本科"
    }],

    [{                                                      //胡鸿翔老师
        time: "2009.09-2013.06",
        school: "浙江工业大学",
        part: "信息工程学院 ",
        major: "控制科学与控制工程系",
        career: "博士"
    }],

    [{                                                      //吴哲夫老师
        time: "2000年",
        school: "浙江大学",
        part: "信息与电子工程学院 ",
        major: "",
        career: "工学博士"
    }],

    [{                                                         //翔云
        time: "2009/1–2014/6",
        school: "密歇根大学",
        part: "",
        major: "电子工程  ",
        career: " 博士"
    }, {
        time: "2006/9–2008/6",
        school: "马萨诸塞大学",
        part: "",
        major: "电子工程  ",
        career: " 硕士"
    }, {
        time: "2002/6–2006/9 ",
        school: " 浙江大学",
        part: "",
        major: "电子信息工程 ",
        career: "学士"
    }],

    [{													//郑雅羽老师
        time: "2002.09－2008.09",                              
        school: "浙江大学",
        part: "",
        major: "电子信息技术及仪器专业",
        career: "工学博士"
    }, {
        time: "1998.09－2002.07",
        school: "浙江大学",
        part: "",
        major: "应用电子技术专业",
        career: "工学学士"
    }, {
        time: "1999.09－2002.07",
        school: "浙江大学",
        part: "",
        major: "计算机科学与技术专业",
        career: "双学士"
    }],

    [{													//朱威老师
        time: "2004/09-2010/09",                            
        school: "浙江大学",
        part: "信息学部",
        major: "电子信息技术及仪器系",
        career: "博士"
    }, {
        time: "2000/09-2004/06",
        school: "浙江大学",
        part: "信息学部",
        major: "测控技术及仪器系",
        career: "本科"
    }],

    [{													//傅晨波老师
        time: "2007/09-2013/06",
        school: "浙江工业大学",                              
        part: "理学院 ",
        major: "物理系",
        career: "硕士，博士"
    }],

    [{													//阮忠远老师
        time: "2008.9-2013.7",
        school: "华东师范大学",                              
        part: "理论物理研究所",
        major: "",
        career: "博士研究生"
    },{
        time: "2004.9-2008.7",
        school: "贵州大学",
        part: "物理系",
        major: "",
        career: "本科"
    }],

    [{                                                     //俞山青老师
        time: "2008/9–2011/9",
        school: "早稻田大学",
        part: "信息 ",
        major: "",
        career: "博士"
    }, {
        time: "2007/9–2008/9",
        school: "早稻田大学",
        part: "信息 ",
        major: "",
        career: "硕士"
    }, {
        time: "2006/9–2008/9",
        school: "上海大学",
        part: "",
        major: "计算机工程与科学",
        career: "硕士"
    }, {
        time: "2002/9–2006/7",
        school: "杭州电子科技大学",
        part: "",
        major: "计算机科学与技术",
        career: "学士"
    }],
	[{														//徐东伟老师
        time: "2008.9-2014.4",
        school: "北京交通大学",                              
        part: "交通安全工程专业",
        major: "",
        career: "博士研究生"
    },{
        time: "2004.9-2008.7",
        school: "北京交通大学",
        part: "交通运输工程大类专业",
        major: "",
        career: "本硕"
    }],
    [{														//汤一平
        time: "1995年3月",                               
        school: " 日本国立埼玉大学",
        part: "",
        major: "信息与科学研究科 ",
        career: "工学博士学位"
    },{
        time: "1991年",
        school:" 获日本文部省国费奖学金赴日留学",
        part: "",
        major: "",
        career: ""
    },{
        time: "1986年~1991年",
        school: " 浙江大学",
        part: "流体传动与控制研究所",
        major: "",
        career: ""
    },{
        time: "1986年 ",
        school: " 浙江大学",
        part: "",
        major: " ",
        career: "硕士学位"
    },{
        time: "1982年 ",
        school: " 浙江理工大学",
        part: "",
        major: " ",
        career: "学士学位"
    }],
    [{														//杨东勇
        time: "1998 年 – 2004 年", 
        school:" 浙江大学",
        part: "",
        major: "",
        career: "博士"
    },{
        time: "2001 年 – 2002 年",
        school: " 筑波大学",
        part: " ",
        major: "",
        career: "访问学者"
    },{
        time: "1980 年 – 1987 年 ",
		school: "南京航空航天大学",
		part: " ",
        major: " ",
        career: "学士，硕士"
    }]

];