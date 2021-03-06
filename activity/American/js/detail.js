
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


var teamName = GetQueryString('team')||'';

var obj = {
    lsjyh:{
        logo:"img/luoshanjiyinhe1.png",
        name:'洛杉矶银河',
        first:"2002 2005 2011 2012 2014",
        star:"img/star_4.png",
        person:['多斯桑托斯',27,'AMF','15球5助',
            '阿什利·科尔',36,'LB','2.1次抢断',
            '格亚西·扎德斯',25,'ST/AMF','6球5助'
        ],
        in:[{name1:"亚历桑德里尼",info:"马赛 27岁 左边锋"},{name1:"佩德罗",info:"吉马良斯23岁 攻击型中场"
        },{name1:"琼斯",info:"科罗拉多急流35岁 防守后腰"}],
        out:"德容、德拉加尔萨",
        feature:"头球争顶成功率为52.5%，传球成功率80.1%，这两项数据都位列全联盟第三，" +
        "两边路均衡，打法直接高效，进攻火力凶猛，防守在全联盟也排在前列，这是洛杉矶银河队能在大联盟一直保持强有力竞争力的保障。",
        total:"身为大联盟夺冠次数最多的球队，洛杉矶银河总能成为冠军的有力争夺者。本赛季继续加强引援，引进了马赛左边锋亚历桑德里尼，" +
        "球队边路实力继续得以保证。赛季结束，杰拉德选择退役，罗比基恩选择离开效力6年的球队，两位大牌的离队对球队造成了不小的影响，" +
        "二队主帅奥纳弗在去年12月接任主教练，如此多的变故，这赛季的银河队注定不会太顺利。",
        teamImg1:"img/luoshanjiyinhe2.png",
        teamImg2:"(图)杰拉德在洛杉矶银河谢幕之战，足坛也再无杰拉德"
    },
    xsddym:{
        logo:"img/xiusidun1.png",
        name:'休斯顿迪纳摩',
        first:"2006 2007",
        star:"img/star_1.png",
        person:['亚历克斯',28,'CLR','5球2助',
            '里卡多·克拉克',24,'MC','4球2助'
        ],
        in:[{name1:"达克斯·麦卡锡",info:"纽约红牛 29岁 组织型中场"},{name1:"儒尼尼奥",info:"蒂华纳 27岁 组织型中场"
        }],
        out:"罗德里格斯(上海申鑫)",
        feature:"进攻主要依仗左路，打法过于单一，球队中又无可依靠的大牌球星凭借个人实力打破场上僵局，进攻往往通过远射来解决，" +
        "远射效率又偏低，降低了球队进攻威胁性。休斯顿迪纳摩的防守能力还是可圈可点的，上赛季总共失球数只有45个，在全联盟要排在中游。",
        total:"上赛球队发挥不佳，常规赛总积分只有34分排名全联盟倒数第二，对于一支曾经成功卫冕的球队来说，这样的成绩未免有些许的尴尬。" +
        "而球队经过上赛季的惨淡之后，并没有加大投资力度以引进更好的球员为球队从根本上改变现状，考虑到直至目前为止在转会市场上没有什么太大的作为，" +
        " 新赛季这支球队不会给人太多的惊喜。",
        teamImg1:"img/xiusidun2.png",
        teamImg2:"(图)新赛季不一样的休斯顿蓄势待发"
    },
    zjghy:{
        logo:"img/zhijiagehuoyan1.png",
        name:'芝加哥火焰',
        first:"1998",
        star:"img/star_3.png",
        person:['乔纳森·坎贝尔',23,'CB','1球1助',
            '大卫·阿肯',26,'ST','9球2助'
        ],
        in:[{name1:"德拉加尔萨",info:"洛杉矶银河 29岁 中后卫"},{name1:"胡安大卫",info:"麦德林独立 25岁 防守型后腰"
        },{name1:"维迪奇",info:"华沙 29岁 前锋"},{name1:"德拉夫",info:"格罗宁根 30岁 前锋"}],
        out:"蒂亚姆（MTK布达佩斯）租借期满",
        feature:"芝加哥火焰队的进攻更倾向于简单粗暴的长传进攻，平均每场长传高达77次位列全联盟第一，这样的打法致使传球成功率只有可怜的74.7%，" +
        "球员水平不无关系，整个球队进攻一直处于不流畅状态，球队鲜有作为。",
        total:"近年来芝加哥火焰的战绩一落千丈，上赛季更是沦落至全联盟倒数第一，进攻乏力，防守漏洞百出，这样的战绩和球队在转会市场无作为有关，" +
        "新赛季前，芝加哥火焰终于开始在转会市场引进实力球员，尤其是在中前场的位置上，引进多达4名实力球员，" +
        "加上球队内的球星阿肯，会形成中前场的有效连线，新赛季，芝加哥公牛的疯狂进攻必将震慑整个联盟。 ",
        teamImg1:"img/zhijiagehuoyan2.png",
        teamImg2:"(图)芝加哥火焰死战大牌云集的纽约城"
    },
    xyglgm:{
        logo:"img/yinggelanaiguozhe1.png",
        name:'新英格兰革命',
        first:"",
        star:"img/star_3.png",
        person:['罗',25,'OMF','5球6助',
            '凯·卡马拉',32,'ST','7球2助'
        ],
        in:[{name1:"安古阿",info:"甘冈 30岁 中后卫"},{name1:"沙维尔夸西",info:"锡勇 27岁 防守型后腰"}],
        out:"",
        feature:"右路是球队球队主要进攻的一路，球队进攻凶猛，以远射见长，上赛季场均射门次数高达14次，" +
        "高居联盟第2，场均有4.8次射正目标。出现倾向一路进攻以说明球队阵容整体不平衡，其他路的球员实力一般，导致防守也失衡。",
        total:"新英格兰革命过于重视进攻，但成功率并不高，防守也相对薄弱，上赛季丢球数为54个，这是球队不能进入季后赛的原因，" +
        "像大部分美职联球队一样，新赛季前，新英格兰革命球队的引援还是比较成功的，先后引进甘冈中后卫安古阿和锡勇防守型后腰沙维尔夸西。" +
        "引援是非常具有针对性的，新英格兰新赛季的后防加强，球队将更有信心坚持打进攻，新赛季新英格兰革命值得一看。 ",
        teamImg1:"img/yinggelanaiguozhe2.png",
        teamImg2:"(图)新英格兰革命全力备战新赛季"
    },
    ksscjj:{
        logo:"img/kansasichengjingji1.png",
        name:'堪萨斯城竞技',
        first:"2000 2013",
        star:"img/star_4.png",
        person:['罗杰·艾斯皮诺萨',30,'OMF','1球6助',
            '多米尼克·德怀尔',26,'ST','16球2助'
        ],
        in:[{name1:"格尔索",info:"比兰尼赛斯 25岁 左边锋"}],
        out:"",
        feature:"堪萨斯城竞技主张高位逼抢，打快速反击，且防守高效，反击也是打的质量较高，攻守兼备，" +
        "虽然球队整体身价不高，但还是有强有力的球权控制力，上赛季场均控球率高达53%，高居全联盟第一。",
        total:"堪萨斯城竞技近几年表现有所下滑，但稳固的防守依然让球队能在季后赛里拥有一席之位， 随着新援格尔索的到来，" +
        "球队的边路实力再次加强，并能够与球队中场灵魂人物罗杰·艾斯皮诺萨形成高效的进攻配合，" +
        "不显山不漏水的堪萨斯竞技说不定就是本赛季一匹强有力的黑马。",
        teamImg1:"img/kansasichengjingji2.png",
        teamImg2:"(图)球迷与球队一路同行重回巅峰"
    },
    glbjy:{
        logo:"img/gelunbujiyuan1.png",
        name:'哥伦布机员',
        first:"2008",
        star:"img/star_3.png",
        person:['贾斯丁·梅尔',28,'OMF','5球10助',
            '凯·卡马拉',27,'ST','16球2助'],
        in:[{name1:"穆罕默德阿布",info:"25岁 防守型后腰"}],
        out:"克拉克（霍尔森斯）、拉尔森（灵比）",
        feature:"哥伦布机员更主张传控打法，传球成功率为百分之82.1%在整个大联盟中位列第一，场均控球率也有53.8%，" +
        "球队的打法让对手疲于奔命，，在比赛进行到70分钟后，对手体力下降，防守质量下滑，进入得分的高峰期。",
        total:"曾经的大联盟霸主在经历了几个赛季的低谷期后，逐渐找回了状态，去年成功续约当家射手卡马拉后希望有更好的表现，" +
        "可人算不如天算，球队主张的tiki-taka打法未收到实质性的效果，反而成为他们的负担，上赛季丢球数高达58个，高居第二位。" +
        "球队并未放弃，在先后续约3名主力后，又签下加纳国脚门萨，本赛季哥伦布机员必将有所作为。",
        teamImg1:"img/gelunbujiyuan2.png",
        teamImg2:"(图)哥伦布机员主场将重燃战火"
    },
    nyhn:{
        logo:"img/niuyuehongniu1.png",
        name:'纽约红牛',
        first:"",
        star:"img/star_4.png",
        person:['萨夏',31,'OMF','6球16助',
            '赖特·菲利普斯',31,'ST','25球4助'],
        in:[{name1:"达马里",info:"（莱比锡红牛 27岁 门将）续租"},{name1:"戴维斯",info:"（纽约红牛二队 24岁 组织型中场）"}],
        out:"祖巴尔（圣旺红星）",
        feature:"由于球队高点较多，纽约红牛的头球能力在全联盟数一数二的，场均头球争顶成功次数多达15.3次，为此球队开发出配套的战术是边路突袭，" +
        "下底传中较多，但球队并不依赖过多的长传，更倾向于更多的短传配合。",
        total:"又是一只红牛的球队，在莱比锡红牛队在德甲呼风唤雨之时，纽约红牛期望在大联盟有着属于自己的成功。上赛季，纽约红牛豪取16胜，位居常规赛第3名，" +
        "可惜止步8强。在冬季球队续租母队球员达马里，虽然没有太大的引援动作，但凭借联赛助攻王萨夏和赖特菲利普斯的强强联合，" +
        "兵多将广的红牛队会在本赛季有着更出彩的发挥。",
        teamImg1:"img/niuyuehongniu2.png",
        teamImg2:"(图)枪王亨利曾在纽约红牛留下美好的记忆"
    },
    dlsfc:{
        logo:"img/dalasi1.png",
        name:'达拉斯FC',
        first:"",
        star:"img/star_5.png",
        person:['毛罗·迪亚斯',25,'OMF','5球10助',
            '马克西米利亚诺',25,'ST','10球3助'],
        in:[{name1:"拉马",info:"比利时国脚 29岁 左边前卫"},{name1:"萨尔瓦蒂耶拉",info:"哥斯达黎加国脚 28岁 中场"}
            ,{name1:"卡拉",info:"国家报队 20岁 左边后卫"}],
        out:"卡斯蒂略（特拉布宗体育）、利萨拉索（蓝十字）租借期满、罗伊德",
        feature:"头球是达拉斯FC的强项，数据统计，达拉斯FC的头球争顶成功率位列全联盟第一位高达55.8%，球队以头球的优势稳扎稳打，" +
        "主要从边路进攻，并寻求制造高空球的机会，对对方禁区造成威胁。",
        total:"达拉斯FC近3年一改颓势，战绩出色稳定，上赛季在主帅帕雷哈的带领下豪夺创记录的常规赛冠军，漫长的赛季，球队能够保持一个稳定的状态可见球队阵容深度之深。" +
        "而主帅也因此夺得美国大联盟年度最佳主帅。本赛季前已经和球队队长赫奇斯续约，球队运作稳定，本赛季依然会有抢眼的表现。",
        teamImg1:"img/dalasi2.png",
        teamImg2:"(图)达拉斯的梦魇主场——丰田球场"
    },
    hsdl:{
        logo:"img/huashengdunlian1.png",
        name:'华盛顿联',
        first:"1996 1997 1999 2004",
        star:"img/star_3.png",
        person:['斯蒂芬波巴姆',26,'CB','3球2助',
            '拉玛尔尼格尔',29,'ST','10球5助'],
        in:[{name1:"阿古拉",info:"洛杉矶银河"},{name1:"塞巴斯蒂安",info:"科罗拉多急流33岁 前锋"}
            ,{name1:"阿科斯塔",info:"博卡青年22岁 攻击型中场"}],
        out:"",
        feature:"华盛顿联坚持简单粗暴的打法，长传次数占到球队传球次数的百分之18，" +
        "虽然球队的传球成功率并不高，但却总能收到奇效，球队以轰炸式进攻闻名，场均13.3次的射门高居联盟前列。",
        total:"作为大联盟传统的强队的华盛顿联队，在大联盟建立初期打出了统治的既表现，近年来表现中规中矩。" +
        "赛季前引进了科罗拉多锋线老将塞巴斯蒂安，加深板凳厚度，并直接买进进博卡青年的希望之星阿科斯塔，华盛顿联拥有多名实力突出的球员，" +
        "本赛季依旧保有强有力的竞争力。",
        teamImg1:"img/huashengdunlian2.png",
        teamImg2:"(图)华盛顿三大腿"
    },
    klldjl:{
        logo:"img/keluoladuojiliu1.png",
        name:'科罗拉多急流',
        first:"2010",
        star:"img/star_5.png",
        person:['什克尔申加希',28,'AML','10球3助',
            '多伊尔',33,'ST','7球2助'],
        in:[{name1:"戈登",info:"（洛杉矶银河）自由转会"}],
        out:"琼斯（洛杉矶银河）",
        feature:"科罗拉多急流一直坚持打防守反击，上赛季场均有17.1的抢断和17.9次的拦截，可见球队在防守力度之强，" +
        "也是球队上赛季取得常规赛季第二的保障，左右两边是球队主要攻击路线，远射是球队得分的主要手段，据数据统计，" +
        "科罗拉多急流在大禁区外的射门次数占到总射门的49%，球队对远射是极其依赖。",
        total:"上赛在引进前埃弗顿门神霍华德后，一改前两年的低迷，常规赛战绩位列全联盟第2。" +
        "本赛季前又引进了美国老国脚，加强了球队羸弱的锋线，阵容稳中提升，防守强悍的急流队会在这赛季会继续给人惊喜。",
        teamImg1:"img/keluoladuojiliu2.png",
        teamImg2:"(图)巴特为科罗拉多急流打入关键进球"
    },
    hjyhc:{
        logo:"img/huangjianyanchenghu1.png",
        name:'皇家盐湖城',
        first:"2009",
        star:"img/star_4.png",
        person:['普拉塔',25,'AML','10球8助',
            '乌亚','35','CB','2球0助'],
        in:[{name1:"莫夫西斯扬",info:"莫斯科斯巴达"},{name1:"阿贝特",info:"格罗宁根 22岁 攻击前场"}],
        out:"杰米（西班牙联合）、阿蒂内拉（明尼苏达联）、席尔瓦（老虎大学）",
        feature:"皇家盐湖城是一支主张进攻的球队，由于球员实力的原因，球队更喜欢将球直接发分给边路，进行快速进攻，" +
        "左路占球队进攻比例的43%，而中路只有22%，球队流畅的短传配合为球队控制比赛节奏提供了强有力的保障。",
        total:"皇家盐湖城在大联盟一直保持着强有力的竞争力，在经历了2015赛季的失败后，球队一直在努力实现复兴，经过上赛的探索，" +
        "球队正式签下之前租用的莫夫西斯扬，转会费高达300万欧元，可见球队复兴的决心，在清理一些边缘球员后，球队实力其实是不降反升，" +
        "本赛季的盐湖城将成为大联盟的搅局者。",
        teamImg1:"img/huangjianyanchenghu2.png",
        teamImg2:"(图)球队老队长贝克尔曼"
    },
    dldfc:{
        logo:"img/duolunduo1.png",
        name:'多伦多FC',
        first:"",
        star:"img/star_4.png",
        person:['吉奥文科',30,'AMF','21球16助',
            '阿尔蒂多尔',29,'MC','6球5助'],
        in:[{name1:"阿维尼亚",info:"喀山红宝石"},{name1:"库伯",info:"阿拉伯联"}],
        out:"布洛姆",
        feature:"多伦多的锋线拥有全联盟最可怕的攻击锋线，由于吉奥文科和阿尔蒂多尔过人的个人实力，" +
        "球队在进攻上也就变化多端，长短传配合，两翼齐飞，头球远射，无不样样精通，对手的防线在这样的多变进攻面前变得羸弱不堪。",
        total:"多伦多FC是联盟的第十三支球队，历史并不算深厚，经过初期的探索，已经渐渐走上了正轨。球队拥有整个联盟都胆寒的前场组合——吉奥文科和阿尔蒂多尔。" +
        "在他们的带领下，上赛季球队打出加入大联盟以来最佳战绩，运作良好的球队本赛季将会继续保持强劲的竞争力。",
        teamImg1:"img/duolunduo2.png",
        teamImg2:"(图)球队刚与球队功勋老将谢鲁续约"
    },
    mtlecj:{
        logo:"img/mentilichongji1.png",
        name:'蒙特利尔冲击',
        first:"",
        star:"img/star_4.png",
        person:['皮亚蒂',32,'AMF','21球5助'],
        in:[{name1:"曼科苏",info:"博洛尼亚 32岁 前锋"},{name1:"克里斯杜瓦尔",info:"明尼苏达联队 25岁 右边后卫"}],
        out:"昂迪维罗（加拉塔萨雷）租借期满、威廉姆斯",
        feature:"蒙特利尔冲击队主打经常用的是433阵型，前场球员充分利用球场的宽度，打快速反击，" +
        "上赛季蒙特利尔冲击队抢断次数场均达到18.1次，拦截场均高达20.4次，这样的数据在联盟中都是数一数二的。",
        total:"又是一支加拿大球队，在2012年成为第19个参加大联盟的球队，和其他新球队一样，加入初期处于探索阶段，但战绩可圈可点。" +
        "在引进德罗巴后，球队的知名度进一步提升。皮亚蒂上赛季打出统治性的表现21球6个助攻，在德罗巴宣布离队后，" +
        "皮亚蒂会作为绝对一哥带领球队继续前进。",
        teamImg1:"img/mentilichongji2.png",
        teamImg2:"(图)魔兽德罗巴在美职联留下了足迹"
    },
    btlfmg:{
        logo:"img/botefamugon1.png",
        name:'波特兰伐木工',
        first:"2015",
        star:"img/star_3.png",
        person:['迭戈瓦莱里',30,'AMF','14球6助','阿里',26,'ST','16球'],
        in:[{name1:"奥鲁姆",info:"堪萨斯竞技 32岁 中后卫"},{name1:"莫耶斯",info:"堪萨斯竞技 29岁 后边后卫"},
            {name1:"巴姆比",info:"莱斯特城 22岁 左边锋"},{name1:"古兹曼",info:"萨普里萨 26岁 防守型后腰"}],
        out:"泰勒（伊普斯维奇）、梅拉诺（贝尔格拉诺）",
        feature:"波特兰伐木工经常使用4231阵型，中场实力不足的球队，只能将攻击前腰站位向后移，虽然加强了中场的控制力，" +
        "但是留下单箭头使得前场攻击力不足，顾此失彼，球队的防守也是力不从心，进而两者皆失。",
        total:"波特兰伐木工是第18支成功加入美国职业大联盟的足球俱乐部，在联赛中一直保持在中游，身在实力较为强大的西部，" +
        "一直抑郁不得志。新赛季前，球队完成了多名球员的引进交易，其中不乏年轻潜力股，球队希望在本赛季完成爆发，" +
        "阵容的大规模变化是个不确定因素，新赛季的波特兰伐木工还是值得一看。",
        teamImg1:"img/botefamugon2.png",
        teamImg2:"(图)年轻的波特兰在2015年豪夺总冠军"
    },
    xythwr:{
        logo:"img/xiyatuhaiwanren1.png",
        name:'西雅图海湾人',
        first:"2016",
        star:"img/star_5.png",
        person:['乔丹莫里斯',22,'SMF/ST ','14球4助','尼古拉',27,'MF','8球5助'],
        in:[{name1:"斯文森",info:"广州富力 防守中场"},{name1:"布鲁因",info:"休斯顿迪纳摩 前锋"},
        {name1:"哈利",info:"蒙特利尔冲击 左边锋"}],
        out:"米尔斯",
        feature:"西雅图海湾人以传控为主，传球成功率为80%，高居联盟前列，主打地面进攻的海湾人由于身高不处于下风头球能力自然也不俗。" +
        "中前场实力雄厚，能形成有效的高位逼抢，形成快速反击。",
        total:"上赛季，西雅图海湾人可以说大联盟里最大的惊喜，虽然成立于2007年，但年轻不代表毫无战斗力，" +
        "从第一个赛季开始，球队一直表现稳定，水平一直位于大联盟中上游。上赛季豪取总冠军，沉浸在胜利喜悦之余，球队不忘继续前行，" +
        "本赛季前继续在球员引进上苦下功夫，在中前场更是花费巨资，本赛季恐有更出彩的表现。",
        teamImg1:"img/xiyatuhaiwanren2.png",
        teamImg2:"(图)卫冕冠军将重新起航"
    },
    wghbm:{
        logo:"img/wengehuabaima1.png",
        name:'温哥华白帽',
        first:"",
        star:"img/star_2.png",
        person:['佩德罗',31,'OMF','9球4助','波拉诺斯',32,'MF','5球7助'],
        in:[{name1:"雷纳",info:"萨尔兹堡红牛 23岁 前锋"},{name1:"威廉姆斯",info:"休斯顿迪纳摩 26岁 右边后卫"}],
        out:"巴内塔（圣加伦）",
        feature:"球队技战术打法较为单一，由于球员个人能力的不足，在中前场往往就失去的对球的控制权 ，球队更倾向于长传配合，" +
        "带来的传球成功率很低。球队多以边路作为进攻突破口，特别是左路，占到球队进攻主导率的39%，在对方半场不能形成有效的进攻组织，" +
        "往往会选择一脚远射草草结束进攻，场均射门次数高达15.1次。",
        total:"作为2011年才加入大联盟的加拿大球队，在2015赛季打出历史最佳战绩后，上赛季一落千丈，在面临球员离队，球员年龄老化的背景下，" +
        "球队并没有什么更好的应对措施，本赛季并无太多的有效转会运作，年龄增大致使球队竞争力的下滑，本赛季并不看好温哥华白帽，球队重建，迫在眉睫。",
        teamImg1:"img/wengehuabaima2.png",
        teamImg2:"(图)加拿大球队创造他的辉煌"
    },
    shsdz:{
        logo:"img/shenghesaidizhen1.png",
        name:'圣何塞地震',
        first:"2001 2003",
        star:"img/star_4.png",
        person:['多洛夫斯基',34,'MF','12球3助','戈多伊',30,'CB','1球2助'],
        in:[{name1:"丹尼",info:"格罗宁格26岁 前锋"},{name1:"乌雷尼亚",info:"26岁 影锋"},{name1:"贾赫米尔",info:"卢塞恩 28岁 左边锋"},
            {name1:"容维尔特",info:"达姆施塔特 28岁 防守后腰"}],
        out:"",
        feature:"凭借甘道夫和阿尔乔姆的个人实力，在右路踢得风生水起，帮助羸弱的球队在赛场上有了可依靠的支点，球队多打442阵型，" +
        "利用中场人数的优势，迅速在中场建立包夹，截球后打出快速反击。",
        total:"圣何塞地震队在12年豪夺常规赛总冠军，可之后战绩一落千丈，上赛季常规排名联赛第17名，虽然排名在后，" +
        "可球队的防守能力依旧傲视整个大联盟，只可惜锋无力。甘道夫与阿尔乔姆在右路打出片天，但迫于进攻方式单一，右路成为对方主防的对象，" +
        "很难凭借一路打出巨大优势。此前已经引进多位锋线好手，可见球队改造的决心，本赛季球队将完成复兴任务。",
        teamImg1:"img/shenghesaidizhen2.png",
        teamImg2:"(图)圣何塞血站达拉斯"
    },
    fclh:{
        logo:"img/feichenglianhe1.png",
        name:'费城联合',
        first:"",
        star:"img/star_4.png",
        person:['克里斯',29,'ST/AMF','12球4助','巴内塔',31,'MF','5球4助'],
        in:[{name1:"梅敦亚宁",info:"特拉维夫马卡比31岁 组织型中场"},{name1:"奥涅乌",info:"34岁 中后卫"},{name1:"西普森",info:"莱顿东方 28岁 前锋"}],
        out:"巴内塔（圣加伦）、琼斯（比兰尼塞斯）、诺古埃拉（斯特拉斯堡）",
        feature:"右路占整支球队进攻主导率的40%，巴西老将伊尔西尼奥依旧在右路展现个人的实力，" +
        "不善头球的费城联合更多的进行地面球打配合，短灵快打出快打旋风，高效的拦截逼抢为进攻和防守缓解了不少的压力。",
        total:"费城联合是美国职业大联盟一支年轻的球队，成立于2008年，2010年加入大联盟，可战绩一直不敬如人意，" +
        "球队此前一直在花费巨资引进实力球员，可效果不是很明显，本赛季继续加大投资，引进梅敦亚宁，希望在中场组成强力组合，" +
        "并与伊尔西尼奥形成两翼齐飞，本赛季的费城联合实力不容小视。",
        teamImg1:"img/feichenglianhe2.png",
        teamImg2:"(图)费城运作良备战新赛季"
    },
    mnsdl:{
        logo:"img/mingnisudalian1.png",
        name:'明尼苏达联',
        first:"",
        star:"img/star_3.png",
        person:['莫里诺',26,'RMF','RMF','约翰贝内加斯',27,'RWF','RWF'],
        in:[{name1:"米格尔伊巴拉",info:"里昂 26岁 攻击型中场"},{name1:"德米多夫",info:"白兰恩 30岁 中后卫"},{name1:"拉斯姆斯",info:"海肯 25岁 组织型中场"}],
        out:"",
        feature:"",
        total:"本赛季，大联盟又扩招了两支球队，明尼苏达联就是其中一支，为了充分备战美职联的比赛，球队几乎一直在招兵买马，打造一直全新的球队。" +
        "球队更是选择了英格兰人希斯担任球队的主教练，希斯球员时代效力于斯托克城、埃弗顿、曼城、伯恩利等多家球队，" +
        "退役后担任过奥斯汀阿兹台克斯、奥兰多城担任过主教练，有在大联盟执教的经验，英格兰人必将带领这青年军打出英式攻势足球的风采。",
        teamImg1:"img/mingnisudalian2.png",
        teamImg2:"(图)本赛季明尼苏达联正式加入美职联几代人的努力终于梦想成真"
    },
    aldc:{
        logo:"img/aolanduocheng1.png",
        name:'奥兰多城',
        first:"",
        star:"img/star_4.png",
        person:['卡卡',34,'SMF/ST','9球9助','莫里诺',26,'AMF','11球8助','伊基塔',23,'CMF','1球1助'],
        in:[{name1:"唐尼",info:"亚特兰大联合 28岁 左边后卫"},{name1:"威尔杰克逊",info:"多伦多FC 30岁 组织型中场"},{name1:"乔纳森佩斯科特",info:"伯明翰姆城市大学 30岁 右边后卫"}],
        out:"阿布罗斯、希斯",
        feature:"奥兰多城球员技术较为出色，多以南美洲球员，多用短传地面配合，场均控球率达到51%，而传球成功率高达80%，球队实力非常平均，" +
        "形成两翼齐飞，球队射门有63%是在大禁区内完成的，可见传控配合的高效。",
        total:"奥兰多城可以用前场美如画后场烂如渣来形容，前场有卡卡作镇，进攻配合打的风生水起之余，后防却连连失火，上赛季失球数达到60个，" +
        "冠绝整个大联盟。虽然进攻效率不俗，可前场队员也经不起这般折腾，上赛季没能够进入季后赛。球队痛定思痛，在引援方面加大了对后卫线的引援力度，" +
        "中场也有前多伦多FC球员威尔杰克逊坐镇，定当会将球队的进攻和防守梳理的井井有条，本赛季奥兰多城会有不一样的出彩表现。",
        teamImg1:"img/aolanduocheng2.png",
        teamImg2:"(图)本曾经的追风少年在奥兰多继续追寻自己的足球梦"
    },
    nyc:{
        logo:"img/niuyuecheng1.png",
        name:'纽约城',
        first:"",
        star:"img/star_5.png",
        person:['比利亚',35,'ST/AMF','23球5助','罗纳德',22,'LB','1球2助','皮尔洛',37,'OMF','1球6助'],
        in:[{name1:"亚历山大林",info:"25岁 组织型中场"},{name1:"米格尔",info:"乔里约斯FC 23岁 攻击型中场"},{name1:"历山大凯伦斯",info:"鲁曼西亚 24岁 中后卫"}],
        out:"",
        feature:"纽约城球队球星众多，脚下技术在联盟内也是数以数二的，三线均衡，有绝对的压制力，进攻讲究层层推进，给对手展现了足够的压制力，" +
        "场均控球率高达52.8%，传球以短传为主，深入到对方危险区域内。大牌众多的球队在危险区域内更多的方式终结比赛，在大禁区外远射占球队射门次数的42%，" +
        "过多的选择远射丝毫没有影响射门质量，场均获得13.6次的射门机会，有5次是打正目标的。",
        total:"纽约城是支年轻的球队，成立于2013年，由于所在城市的原因，吸引了更多的世界大牌球员去踢球，其中就囊括了赫赫有名的中场大师皮耶罗，昔日巴萨名将比利亚和切尔西神灯兰帕德。" +
        "在2016赛季，比利亚的出色表现为球队贡献23球5次助攻，荣获大联盟最佳球员。本赛季兰帕德退役对球队有不小的影响，" +
        "球队也因此引进了不少希望之星，尤其是中场位置上。新赛季，纽约城依然会是总冠军的有力争夺者。",
        teamImg1:"img/niuyuecheng2.png",
        teamImg2:"(图)葫芦娃在美职联找到了第二春"
    },
    ytldl:{
        logo:"img/yatelandalian1.png",
        name:'亚特兰大联',
        first:"",
        star:"img/star_3.png",
        person:['马丁内斯',23,'AMF','--','米古拉',23,'LMF','--','冈萨雷斯',24,'CB','--'],
        in:[{name1:"卡尔莫纳",info:"亚特兰大贝加莫 29岁 组织型中场"},{name1:"阿萨德",info:"贝莱斯菲尔德竞 22岁 攻击型中场"},{name1:"肯韦恩·琼斯",info:"中央俱乐部 32岁 前锋"}],
        out:"",
        feature:"",
        total:"亚特兰大联是另外一家本赛季加入大联盟的球队，成立于2014年，为备战大联盟的比赛球队经理人全力以赴的球队添砖加瓦，" +
        "你会发现有不少很有实力的球员比如马丁内斯和米古拉，" +
        "这只球队的平均年龄不过26岁，或许第一个赛季期望值不会太高，但经过磨炼之后必将展现他们的强大实力。",
        teamImg1:"img/yatelandalian2.png",
        teamImg2:"(图)阿根廷旧帅马蒂诺成为新军主帅"
    }

}
$('#teamTitle').html(obj[teamName].name);
$('#teamLogo').attr("src",obj[teamName].logo);
$('#teamName').html(obj[teamName].name);
$('#teamFirst').html(obj[teamName].first);
$('#teamStar').attr("src",obj[teamName].star);

$('#teamPerson').html(function(str){
    var str="";
    for(var attr in obj[teamName].person){
        str+="<li>"+obj[teamName].person[attr]+"</li>"
    }
 return str;
});
$('#teamIn').html(function(str){
    var str="";
    for(var i=0;i<obj[teamName].in.length;i++){
        str+='<p class="p7"><span class="color_white m_r32">'+obj[teamName].in[i].name1+'</span><span class="color_blue">'+obj[teamName].in[i].info+'</span></p>';
    }
    return str;
});
$('#teamOut').html(obj[teamName].out);
$('#teamFeature').html(obj[teamName].feature);
$('#teamTotal').html(obj[teamName].total);
$('#teamImg1').attr("src",obj[teamName].teamImg1);
$('#teamImg2').html(obj[teamName].teamImg2);
var a=$('#teamFirst').html();
if(a.length==0){
    $('#teamFirst').parent().hide();
    $("#teamName").addClass("p11");
}
var b=$('#teamFeature').html();
if(b.length==0){
    $('#teamFeature').parent().hide();
}