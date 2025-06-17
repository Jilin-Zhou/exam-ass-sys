// 题库数据
const questionBank = {
    第一章: [
        {
            type: 'single',
            question: '在邮件处理中心的业务中，处理从异地发往异地，在本地做经转的作业形式被称为？',
            options: ['进口作业', '出口作业', '转口作业', '本口作业'],
            answer: 2,
            explanation: '根据重点文件P1，转口业务指从异地发往异地、仅在本地做经转的邮件，一般不进行开拆和重新分拣。'
        },
        {
            type: 'multiple',
            question: '根据我国邮政对三级中心局的划分，以下哪些属于一级中心局？（多选）',
            options: ['北京', '上海', '南京', '广州', '成都'],
            answer: [0, 1, 3, 4],
            explanation: '根据重点文件P1，全国一级中心局共有七个：北京、上海、沈阳、武汉、广州、成都和西安。'
        },
        {
            type: 'judge',
            question: '根据邮政行业标准，快件的单件重量不宜超过50公斤，且长、宽、高三边之和不宜大于300厘米。',
            answer: true,
            explanation: '根据重点文件P1，快递包裹的单件重量不宜超过50公斤，单边长度不超过150厘米，长宽高之和不超过300厘米。'
        },
        {
            type: 'single',
            question: '中国邮政法规定，具有法律效力的文件(如录取通知书、档案)必须通过哪种服务寄递？',
            options: ['普通快递', '顺丰速运', 'EMS', '邮政平邮'],
            answer: 2,
            explanation: '根据重点文件P1，具有法律效力的文件必须通过EMS寄递。'
        },
        {
            type: 'judge',
            question: '邮件从甲地到乙地的全过程称为邮路。',
            answer: false,
            explanation: '根据重点文件P1，邮件从甲地到乙地的全过程称为路由。邮路是指连接各节点的物理线路。'
        },
        {
            type: 'multiple',
            question: '邮件处理中心的主要职能流程包括哪些环节？（多选）',
            options: ['接收', '开拆', '分拣封发', '交运'],
            answer: [0, 1, 2, 3],
            explanation: '根据重点文件P1，邮件处理中心的主要职能流程包括：接收、开拆、分拣封发和交运。'
        },
        {
            type: 'single',
            question: '在邮件分拣方式的变革中，利用胶带传输设备进行粗分，人工再进行细分属于哪个阶段？',
            options: ['纯手工分拣', '半自动分拣', '自动分拣', '智能分拣'],
            answer: 1,
            explanation: '根据重点文件P1，半自动分拣的定义是利用胶带传输设备进行粗分，人工再细分。'
        },
        {
            type: 'judge',
            question: '广义上，快递与物流都属于供应链生态的一部分，但快递更关注成本，而物流更关注时效。',
            answer: false,
            explanation: '根据重点文件P1，快递更强调以时效为核心关注点，而物流则更关注成本。'
        },
        {
            type: 'single',
            question: '我国邮政网形成了以邮区中心局为基本单元的几级网络结构？',
            options: ['一级', '二级', '三级', '四级'],
            answer: 2,
            explanation: '根据重点文件P1，我国邮政网形成了以邮区中心局为基本单元的三级网络结构（干线、省和邮区）。'
        },
        {
            type: 'multiple',
            question: '以下关于快递服务的定义，描述正确的有？（多选）',
            options: ['是快速收寄、运输、投递的服务形式', '必须是单独封装的、有名址的快件', '单件重量不能超过50公斤', '单边长度不能超过150厘米'],
            answer: [0, 1, 2, 3],
            explanation: '这些都是重点文件P1中关于快递服务定义的关键要素。'
        },
        {
            type: 'shortAnswer',
            question: '简述邮政网的五个基本组成部分。',
            referenceAnswer: '1. 邮件入口（如邮局、邮差揽件）；2. 邮政网节点（各级处理中心）；3. 投递终端（如邮局、收发室、智能快递柜）；4. 邮路（连接各节点的物理线路）；5. 路由（邮件从甲地到乙地的全过程）。',
            explanation: '这五个部分构成了邮政网结构的基本原理，源自重点文件P1。'
        }
    ],
    第二章: [
        {
            type: 'single',
            question: '在自动分拣系统中，使用滑块将物品从主输送带上推入指定分拣口的方式属于哪种类型？',
            options: ['弹出式分拣', '承载式分拣', '主动式分拣', '倾翻式分拣'],
            answer: 2,
            explanation: '根据重点文件P13，滑块式分拣机属于主动式分拣。'
        },
        {
            type: 'multiple',
            question: '一个完整的分拣系统通常由哪几个子系统构成？（多选）',
            options: ['汇流子系统', '供件导入子系统', '分拣子系统', '卸放子系统'],
            answer: [0, 1, 2, 3],
            explanation: '根据“分拣设备”PPT内容和重点文件P13，分拣系统包含汇流、供件导入、分拣和卸放四个子系统。'
        },
        {
            type: 'judge',
            question: '交叉带分拣机（Crossorter）和翻盘分拣机（Tilt-tray sorter）都属于承载式分拣，适合处理随意形状的物品。',
            answer: true,
            explanation: '根据重点文件P13，这两类都属于承载式分拣，工作原理是将物品放置在独立的承载单元上。'
        },
        {
            type: 'single',
            question: '以下哪种分拣方式对商品冲击力小、分拣轻柔，特别适应平底面商品？',
            options: ['滑块式分拣机', '斜导轮式分拣机', '交叉带分拣机', '翻盘式分拣机'],
            answer: 1,
            explanation: '根据重点文件P13，斜导轮式分拣机具有冲击力小、分拣轻柔、快速准确的特点，适应平底面商品。'
        },
        {
            type: 'judge',
            question: '分拣系统的工作原理遵循“识别 -> 合流 -> 分拣 -> 卸放”的基本流程。',
            answer: false,
            explanation: '根据重点文件P13，正确的流程是“合流 -> 识别 -> 分拣 -> 卸放”。'
        },
        {
            type: 'single',
            question: '交叉带分拣机的速度可达2.25m/s，其单供件区的处理能力约是多少？',
            options: ['8000单元/小时', '10500单元/小时', '13500单元/小时', '18000单元/小时'],
            answer: 2,
            explanation: '根据重点文件P13，交叉带分拣机单供件区可达13,500单元/小时。'
        },
        {
            type: 'multiple',
            question: '以下属于主动式分拣的设备有？（多选）',
            options: ['滑块式分拣机', '水平摆臂式分拣机', '斜导轮式分拣机', '翻盘式分拣机'],
            answer: [0, 1],
            explanation: '根据重点文件P13，滑块式和水平摆臂式都属于主动式分拣。斜导轮属于弹出式，翻盘属于承载式。'
        },
        {
            type: 'judge',
            question: '翻盘式分拣机适用于大批量产品的分拣，但对物品形状要求较高，必须是规则的箱型件。',
            answer: false,
            explanation: '根据重点文件P13，翻盘式分拣机适用于大批量产品分拣，但作为承载式分拣的一种，它可以处理随意形状的物品。'
        },
        {
            type: 'single',
            question: '在分拣系统的控制层次中，WCS指的是什么？',
            options: ['企业资源计划系统', '仓库管理系统', '仓库控制系统', '机器控制系统'],
            answer: 2,
            explanation: '根据重点文件P13和“分拣设备”PPT，WCS（Warehouse Control System）是仓库控制系统层。'
        },
        {
            type: 'judge',
            question: '为保证分拣准确性，在合流后通常需要进行贴边和拉距处理。',
            answer: true,
            explanation: '根据重点文件P13，“贴边”和“拉距”（生成物品间距）是合流后的重要处理步骤，以确保后续识别和分拣的准确性。'
        },
        {
            type: 'shortAnswer',
            question: '简述分拣系统控制的五个层次。',
            referenceAnswer: '从上到下依次是：1. 企业资源计划/主机层(ERP/Host)；2. 仓库管理系统层(WMS)；3. 仓库控制系统层(WCS)；4. 机器控制层(Machine Controls Level)；5. 机电设备层(Electro mechanical Equipment)。',
            explanation: '这五个层次构成了分拣系统完整的控制体系结构，源自“分拣设备”PPT和重点文件P13。'
        }
    ],
    第三章: [
        {
            type: 'single',
            question: '带式输送机是利用什么原理来驱动输送带和物件运动的？',
            options: ['啮合传动', '摩擦传动', '液压传动', '链条传动'],
            answer: 1,
            explanation: 'PPT中明确指出，带式输送机属于摩擦传动范畴，通过张紧装置产生的初张力使驱动滚筒和输送带之间产生摩擦力。'
        },
        {
            type: 'judge',
            question: '为确保货物在重力式滚筒输送机上平稳输送，其支承面至少要接触5个滚筒。',
            answer: false,
            explanation: '根据重点文件P12，为确保货物在重力式滚筒输送机上平衡输送，支承面至少要接触3个辊子。而对于滚轮输送机，是5个滚轮。'
        },
        {
            type: 'single',
            question: '板条式提升机中，进货口和出货口在不同方向，效率较高的是哪种形式？',
            options: ['C形', 'S形', 'Z形', 'I形'],
            answer: 1,
            explanation: '根据重点文件P12，S形板条式提升机进出货口在不同方向，货物提升路径与空载板条返回路径不交叉，因此效率高。'
        },
        {
            type: 'judge',
            question: '斗式提升机中，离心卸料式速度最快，而完全卸料式速度最慢但卸料最彻底。',
            answer: true,
            explanation: '根据重点文件P12，这准确描述了不同卸料方式斗式提升机的速度与效果特点。'
        },
        {
            type: 'multiple',
            question: '以下哪些是斗式提升机的卸料方式？（多选）',
            options: ['离心卸料式', '重力卸料式', '导板卸料式', '完全卸料式'],
            answer: [0, 2, 3],
            explanation: '根据重点文件P12和“输送技术与设备”PPT，斗式提升机按卸料方式分为离心卸料式、导板卸料式和完全卸料式。'
        },
        {
            type: 'single',
            question: '重力式辊筒输送机的辊筒长度一般如何确定？',
            options: ['货物宽度 - 50mm', '货物宽度 + 50mm', '货物长度 + 50mm', '与货物宽度相同'],
            answer: 1,
            explanation: '根据重点文件P12，重力式辊筒输送机的辊筒长度一般情况下是货物宽度+50mm。'
        },
        {
            type: 'judge',
            question: '输送装备的生产率Q（吨/小时）仅取决于输送速度v（米/秒）。',
            answer: false,
            explanation: '根据重点文件P12，生产率Q不仅取决于速度v，还取决于单位长度承载质量q（千克/米）。公式为 Q = 3.6 * q * v。'
        },
        {
            type: 'single',
            question: '板条式提升机的C形和S形，其主要区别在于？',
            options: ['提升高度', '承载能力', '进出货口方向', '运行速度'],
            answer: 2,
            explanation: '根据重点文件P12，C形和S形的主要区别在于进出货口是否在同方向，这导致了其运行路径和效率的差异。'
        },
        {
            type: 'judge',
            question: '重力式滚轮输送机非常适合在有大量灰尘的环境中使用。',
            answer: false,
            explanation: '根据“输送技术与设备”PPT，滚珠（或滚轮）输送机不能用于灰尘多的环境中。'
        },
        {
            type: 'multiple',
            question: '关于连续输送设备的特点，以下说法正确的有？（多选）',
            options: ['生产率高，速度稳定', '通用性强，适合各种货物', '线路固定，便于实现自动控制', '负载均匀，消耗功率几乎不变'],
            answer: [0, 2, 3],
            explanation: '根据“输送技术与设备”PPT，其通用性差，每种机型一般只适用于特定类型货物，但其他选项描述正确。'
        },
        {
            type: 'calculation',
            question: '某输送带速度为1.5 m/s，单位长度承载质量为8 kg/m，请计算其理论输送能力（单位：吨/小时）。',
            referenceAnswer: 'Q = 3.6 * q * v = 3.6 * 8 * 1.5 = 43.2 吨/小时',
            calculationSteps: '公式：Q = 3.6 * q * v\n其中 q = 8 kg/m, v = 1.5 m/s\n计算: Q = 3.6 * 8 * 1.5 = 43.2 (吨/小时)',
            explanation: '输送能力计算公式 Q = 3.6 * q * v，其中q的单位是kg/m，v的单位是m/s，计算结果Q的单位是吨/小时。'
        }
    ],
    第四章: [
        {
            type: 'single',
            question: '在中国铁路车次中，通常用于表示进京方向或从支线到干线的上行列车的是？',
            options: ['奇数车次', '偶数车次', '首字母为K的车次', '首字母为T的车次'],
            answer: 1,
            explanation: '根据重点文件P3，铁路规定进京方向或从支线到干线为上行，上行列车车次为偶数。'
        },
        {
            type: 'judge',
            question: '公路运输因其机动灵活性，特别适合长距离、大批量的货物运输。',
            answer: false,
            explanation: '根据重点文件P2，公路运输的经济运输半径约为200公里，适合中短途运输，不适合长距离大批量运输。'
        },
        {
            type: 'single',
            question: '在五种基本运输方式中，运力最大、成本最低的是哪一种？',
            options: ['铁路运输', '公路运输', '水路运输', '航空运输'],
            answer: 2,
            explanation: '根据重点文件P2，水路运输的优点是运输能力大、运输成本低。'
        },
        {
            type: 'multiple',
            question: '以下关于航空运输的特点，描述正确的有哪些？（多选）',
            options: ['速度快', '运费高', '不受地面条件影响', '运输量大'],
            answer: [0, 1, 2],
            explanation: '根据重点文件P2，航空运输的优点是速度快、不受地面条件影响，缺点是运费较高、体积受舱容限制，运输量相对较小。'
        },
        {
            type: 'judge',
            question: '第二亚欧大陆桥东起我国的连云港，经阿拉山口出境。',
            answer: true,
            explanation: '根据重点文件P3，这准确描述了第二亚欧大陆桥的路线。'
        },
        {
            type: 'single',
            question: '铁路运输的“五定班列”中的“五定”不包括以下哪一项？',
            options: ['定点', '定线', '定车次', '定司机'],
            answer: 3,
            explanation: '根据重点文件P3，“五定班列”指的是定点、定线、定车次、定时和定价。'
        },
        {
            type: 'judge',
            question: '我国的运输发展方针是以公路为骨干，以铁路为基础。',
            answer: false,
            explanation: '根据重点文件P2，我国的运输发展方针是：以铁路为骨干、以公路为基础。'
        },
        {
            type: 'multiple',
            question: '以下哪些属于铁路G字头列车的特点？（多选）',
            options: ['高速动车组列车', '车次编号为G1001-G9998', '读作“高”', '最高时速为250公里'],
            answer: [0, 2],
            explanation: '根据“运输技术与装备”PPT，G字头为高速动车组，读“高”。其编号范围和速度与PPT描述有出入（PPT未明确G字头编号），但核心特征是高速动车组。'
        },
        {
            type: 'single',
            question: '在车辆超限与超载的定义中，超过了行驶证上核定载质量的行为属于？',
            options: ['超限', '超载', '违章', '违法'],
            answer: 1,
            explanation: '根据重点文件P3，超载是指车辆运载的货物重量超过了行驶证上核定的载质量。超限则指外廓尺寸、轴载质量或总质量超标。'
        },
        {
            type: 'judge',
            question: '港口检疫信号旗中，“Q”字旗表示本船有染疫或染疫嫌疑，请即刻实施检疫。',
            answer: false,
            explanation: '根据重点文件P4，“Q”字旗表示“本船没有染疫，请发给入境检疫证”。“QQ”字旗才表示有染疫或嫌疑。'
        },
        {
            type: 'shortAnswer',
            question: '什么是大陆桥运输？请举出两个例子。',
            referenceAnswer: '大陆桥是指横贯大陆的铁路把两侧的海上运输线联结起来的便捷运输通道。\n例子：第一亚欧大陆桥（西伯利亚大陆桥）和第二亚欧大陆桥（新亚欧大陆桥，东起连云港）。',
            explanation: '理解大陆桥的核心概念是“以铁路连接两端海运”，源自重点文件P3。'
        },
        {
            type: 'shortAnswer',
            question: '简述五种基本运输方式（公路、铁路、水路、航空、管道）各自最突出的一个优点和一个缺点。',
            referenceAnswer: '公路：优点是机动灵活，缺点是运量小成本高。\n铁路：优点是运力大，缺点是灵活性差。\n水路：优点是成本极低，缺点是速度极慢。\n航空：优点是速度极快，缺点是成本极高。\n管道：优点是连续性强，缺点是灵活性差，仅限流体。',
            explanation: '这是对重点文件P2中五种运输方式特点的高度概括。'
        }
    ],
    第五章: [
        {
            type: 'single',
            question: '在AGV的导航方式中，通过发射激光束并采集反射板返回的激光来确定自身位置和方向的技术是？',
            options: ['磁带导航', '二维码导航', '激光导引', '惯性导引'],
            answer: 2,
            explanation: '根据重点文件P11，这种利用激光扫描仪和预设的反光板进行定位的方式是激光导引。'
        },
        {
            type: 'multiple',
            question: '根据PPT内容，步行式叉车主要有哪几种基本型式？（多选）',
            options: ['步行无动力式', '步行平衡重式', '步行插腿式', '步行前移式'],
            answer: [0, 1, 2, 3],
            explanation: '根据重点文件P10，这四项都属于步行式叉车的基本类型。'
        },
        {
            type: 'judge',
            question: '为了使托盘具有通用性，我国现在的标准主要采用1200mm×1000mm 和 1100mm×1100mm 两种规格。',
            answer: true,
            explanation: '根据重点文件P10，这两种是国家标准托盘尺寸，便于交换和通用。'
        },
        {
            type: 'single',
            question: '在叉车类型中，通道要求最宽，通过车尾部的配重来平衡货叉上货物力矩的是？',
            options: ['前移式叉车', '平衡重式叉车', '插腿式叉车', '手动托盘搬运车'],
            answer: 1,
            explanation: '根据重点文件P10，平衡重式叉车通过车尾平衡重来平衡，门架在车体最前端，因此转弯半径大，通道要求最宽。'
        },
        {
            type: 'judge',
            question: '插腿式叉车由于有前部支腿，因此可以方便地用于双面托盘的作业。',
            answer: false,
            explanation: '根据重点文件P11，插腿式叉车的支腿会与双面托盘的下层面板冲突，因此不能用于双面托盘或驶入式货架。'
        },
        {
            type: 'multiple',
            question: '以下关于托盘单元尺寸计算原则，说法正确的有？（多选）',
            options: ['货物在托盘上的投影面积利用率应不低于80%', '货物重心高度不应超过托盘短边的三分之二', '多层货物应采取交错码放', '固定方式只能采用捆扎'],
            answer: [0, 1, 2],
            explanation: '根据重点文件P10，前三项均是正确的原则。固定方式除了捆扎，还有胶合束缚、拉伸包装等。'
        },
        {
            type: 'single',
            question: '用于短距离、轻型物料搬运，以人力为主，结构轻巧灵活的设备是？',
            options: ['叉车', 'AGV', '手推车', '输送机'],
            answer: 2,
            explanation: '根据重点文件P10，手推车以人力为主，轻巧灵活，适用于短距离轻型物料搬运。'
        },
        {
            type: 'judge',
            question: '坐式平衡重叉车比立式平衡重叉车更适合在窄巷道中作业。',
            answer: false,
            explanation: '根据重点文件P11，立式平衡重叉车因其设计，更适合在窄巷道中作业；坐式适合长距离、重负载的搬运。'
        },
        {
            type: 'single',
            question: 'AGV的导引方式中，需要在地面铺设特定颜色或荧光色带的是？',
            options: ['激光导引', '光学导引', 'SLAM', '电磁导引'],
            answer: 1,
            explanation: '根据重点文件P11，光学导引是通过识别地面上的色带进行路径跟踪。'
        },
        {
            type: 'multiple',
            question: '选择托盘材质时，需要考虑的因素有哪些？（多选）',
            options: ['温度环境', '潮湿程度', '清洁度要求', '是否用于出口'],
            answer: [0, 1, 2, 3],
            explanation: '根据重点文件P10，这些都是选择托盘材质时需要考虑的关键因素。例如，木托盘怕潮，出口需熏蒸；塑料托盘耐潮湿、易清洁。'
        },
        {
            type: 'shortAnswer',
            question: '简述平衡重式叉车、前移式叉车和插腿式叉车在结构和应用上的核心区别。',
            referenceAnswer: '1. 平衡重式叉车：通过车尾配重平衡，门架在车体最前，通道要求最宽，适用于室外和重载。2. 前移式叉车：门架或货叉可前移，越过支腿取货，提升高度高，通道要求较窄。3. 插腿式叉车：支腿在货叉下方伸入托盘或货架底部，车身轻，通道要求最窄，但不能用于双面托盘。',
            explanation: '这是对重点文件P10-P11中三种主要叉车类型的核心特点的高度概括。'
        }
    ],
    第六章: [
        {
            type: 'single',
            question: '在自动化立体仓库中，执行货物存取作业的核心设备是？',
            options: ['输送机', 'AGV', '堆垛机', '提升机'],
            answer: 2,
            explanation: '根据重点文件P7，堆垛机（Stacker Crane）是自动化立体仓库中进行存取作业的核心设备。'
        },
        {
            type: 'multiple',
            question: '与传统货架相比，后推式货架（Push-back Rack）具有哪些特点？（多选）',
            options: ['储存密度高', '无法实现先进先出', '适用于少样多量物品', '存取性非常好'],
            answer: [0, 1, 2],
            explanation: '根据重点文件P6，后推式货架储存密度较高，但存取性不如横梁式，且先进先出不易保证，适用于少品种、大批量的存储。'
        },
        {
            type: 'single',
            question: '哪种货架利用货物自重，在倾斜的滚道上实现“先进先出”？',
            options: ['驶入式货架', '后推式货架', '流利式货架', '悬臂式货架'],
            answer: 2,
            explanation: '根据重点文件P6，流利式货架利用货物自重，在倾斜滚道上自动滑向出口，可实现先进先出。'
        },
        {
            type: 'judge',
            question: '驶入式货架的储存密度非常高，但存取性差，且难以实现先进先出。',
            answer: true,
            explanation: '根据重点文件P6，这准确描述了驶入式货架的特点：以牺牲存取性为代价换取极高的存储密度。'
        },
        {
            type: 'single',
            question: '最基本、最常见的货架类型，提供100%的存取性，但储存密度相对较低的是？',
            options: ['移动式货架', '阁楼式货架', '托盘横梁式货架', '流利式货架'],
            answer: 2,
            explanation: '根据重点文件P6，托盘横梁式货架是最常见的货架形式，特点是100%存取性。'
        },
        {
            type: 'multiple',
            question: '自动化立体仓库的优点包括哪些？（多选）',
            options: ['初期投资成本低', '空间利用率高', '作业效率高', '能适应特殊环境（如低温、黑暗）'],
            answer: [1, 2, 3],
            explanation: '根据重点文件P7，自动化立体库的缺点之一是投资大，但具有空间利用率高、效率高、能适应特殊环境等优点。'
        },
        {
            type: 'judge',
            question: '悬臂式货架特别适合存放管材、型材、板材等长尺寸物料。',
            answer: true,
            explanation: '根据重点文件P6，悬臂式货架的结构特点就是为了存放长条状或长卷状货品。'
        },
        {
            type: 'single',
            question: '在仓库布局时，为了提高储存密度，但同时只能打开一个作业通道的货架是？',
            options: ['流利式货架', '后推式货架', '移动式货架', '阁楼式货架'],
            answer: 2,
            explanation: '根据重点文件P6，移动式货架将货架安装在移动底盘上，平时密集排列，作业时仅移开所需通道，地面利用率可达80%。'
        },
        {
            type: 'judge',
            question: '双伸位货架的储存密度比单伸位货架低，但存取效率更高。',
            answer: false,
            explanation: '根据重点文件P6，双伸位货架储存密度可增加1倍，但存取性及出入库能力相对降低，必须配合双伸位堆垛机。'
        },
        {
            type: 'multiple',
            question: '选择仓储设备时，需要遵循的原则有哪些？（多选）',
            options: ['作业方式和作业量协同原则', '工作能力均衡原则', '系统可靠性原则', '只买最贵最先进的原则'],
            answer: [0, 1, 2],
            explanation: '根据重点文件P5，设备选择应综合考虑作业流程、能力均衡、系统可靠性等，而非盲目追求最贵或最先进。'
        },
        {
            type: 'shortAnswer',
            question: '简述自动化立体仓库（AS/RS）相比于传统仓库的主要优点。',
            referenceAnswer: '1. 空间利用率高（增加高度，减少占地）；2. 作业效率高（机械化自动化作业）；3. 便于控制管理（计算机管理，先进先出，信息处理）；4. 适应特殊环境（黑暗、低温、有毒）；5. 降低货物破损率。',
            explanation: '这些优点概括了AS/RS在高密度存储、自动化作业、信息化管理和环境适应性方面的核心价值，源自重点文件P7。'
        },
        {
            type: 'shortAnswer',
            question: '请简述横梁式货架、驶入式货架和流利式货架各自最适合的存储场景。',
            referenceAnswer: '1. 横梁式货架：适合多品种、中小批量的货物存储，需要100%存取和较高拣选效率的场景。\n2. 驶入式货架：适合少品种、大批量的货物存储，对先进先出要求不高的场景，如食品、饮料行业。\n3. 流利式货架：适合少品种、大批量、高频度出入库且要求严格先进先出的场景，如生产线旁的中转库或拆零拣选区。',
            explanation: '这是对重点文件P6中几种核心货架类型应用特点的总结对比。'
        }
    ],
    模拟卷: [
        // --- 单项选择题 ---
        {
            type: 'single',
            question: '根据我国邮政行业《快递服务标准》，快递包裹的单件重量通常不宜超过多少公斤，长宽高之和不超过多少厘米？',
            options: ['30公斤, 200厘米', '50公斤, 300厘米', '70公斤, 350厘米', '100公斤, 400厘米'],
            answer: 1,
            explanation: '根据《快递服务标准》，快递包裹单件重量不宜超过50公斤，单边长度不超过150厘米，长宽高之和不超过300厘米。'
        },
        {
            type: 'single',
            question: '我国邮政网形成了以邮区中心局为基本单元的三级网络结构，其中一级中心局全国共有多少个？',
            options: ['5个', '7个', '10个', '12个'],
            answer: 1,
            explanation: '我国邮政网的一级中心局负责省际邮件的封发、经转，全国共有七个，分别是北京、上海、沈阳、武汉、广州、成都和西安。'
        },
        {
            type: 'single',
            question: '邮件分拣方式的变革经历了几个主要阶段，其正确的演进顺序是怎样的？',
            options: ['纯手工分拣 -> 半自动分拣 -> 自动分拣', '半自动分拣 -> 纯手工分拣 -> 自动分拣', '纯手工分拣 -> 自动分拣 -> 半自动分拣', '自动分拣 -> 半自动分拣 -> 纯手工分拣'],
            answer: 0,
            explanation: '邮件分拣方式经历了从纯手工分拣（人拉肩扛，“打地摊”）到半自动分拣（利用胶带传输设备进行粗分，人工再细分），最终发展到自动分拣（通过自动化分拣机实现一次分拣装车）的过程。'
        },
        {
            type: 'single',
            question: '在选择何种运输手段时，尽管需要综合考虑多种因素，但通常被视作核心考虑因素的是什么？',
            options: ['运输时间和运输频率', '运费和运输时间', '运输能力和货物安全性', '适用性和网络性'],
            answer: 1,
            explanation: '在多种运输决策因素中，运费和运输时间是两个最核心的考虑因素，直接影响成本和时效。'
        },
        {
            type: 'single',
            question: '铁路的“五定班列”是指指定点、定线路、定车次、定时和什么？',
            options: ['定编组', '定载重', '定价', '定司机'],
            answer: 2,
            explanation: '五定班列是指指定点、定线、定车次、定时和定价的铁路货物班列运输产品。'
        },
        {
            type: 'single',
            question: '在国际航运中，有些船舶选择在对船舶登记、税收和船员雇佣等方面要求宽松的国家注册，悬挂该国国旗，这类船舶通常被称为？',
            options: ['船旗国船', '无国籍船', '目的港国船', '方便旗船'],
            answer: 3,
            explanation: '方便旗船指在实行开放登记制度的国家注册的船舶，这些国家对船舶登记、税收、船员雇佣等方面的要求较为宽松。'
        },
        {
            type: 'single',
            question: '仓库的库容量利用系数是衡量仓库经营效率的重要指标，通常认为该系数超过多少时较为理想？',
            options: ['65%', '75%', '85%', '95%'],
            answer: 2,
            explanation: '库容量利用系数是实际库存量与仓库设计存储能力之比，通常认为超过85%较为理想，表示仓库利用率高。'
        },
        {
            type: 'single',
            question: '哪种类型的货架虽然储存密度非常高，但叉车需要驶入货架内部作业，且通常难以实现先进先出管理，适合少品种、大批量的物品储存？',
            options: ['托盘横梁式货架', '驶入/驶出式货架', '流利式货架', '悬臂式货架'],
            answer: 1,
            explanation: '驶入/驶出式货架允许叉车进入货架内部作业，以牺牲存取性为代价换取极高的存储密度，难以实现先进先出。'
        },
        {
            type: 'single',
            question: '为了保证自动化立体库中堆垛机的垂直和水平操作效率，推荐采用的H/L(高度/长度)比通常在哪个范围？',
            options: ['1/2到1/3', '1/4到1/6', '1/7到1/8', '1/9到1/10'],
            answer: 1,
            explanation: '为了保证堆垛机的操作效率和稳定性，其作业区域的高度(H)与巷道长度(L)之比推荐为1/4到1/6。'
        },
        {
            type: 'single',
            question: '自动导引车(AGV)的导引方式有多种，其中通过传感器实时构建环境地图并进行自身定位的导引技术属于哪一类？',
            options: ['电磁导引', '光学导引', '激光导引(基于反射板)', 'SLAM(同步定位与地图构建)导引'],
            answer: 3,
            explanation: 'SLAM (Simultaneous Localization and Mapping)导引方式属于自由路径导向，AGV通过激光雷达或摄像头等传感器实时感知环境来导航。'
        },
        {
            type: 'single',
            question: '输送机生产率的计算公式为 Q = 3.6 × q × v，其中Q代表生产率，其常用的单位是什么？',
            options: ['千克/秒', '米/分钟', '吨/小时', '立方米/小时'],
            answer: 2,
            explanation: '在该公式中，当q的单位为千克/米，v的单位为米/秒时，经过系数3.6的转换，得出的生产率Q的单位是吨/小时。'
        },
        {
            type: 'single',
            question: '对于重力式滚轮输送机，为确保货物能够平稳输送，货物的支承面长度范围内至少应同时接触多少个滚轮？',
            options: ['2个', '3个', '4个', '5个'],
            answer: 3,
            explanation: '为确保货物在重力式滚轮输送机上平稳输送，其支承面(通常是底部)应至少同时接触5个滚轮。'
        },
        {
            type: 'single',
            question: '斗式提升机按照卸料方式可以分为不同类型，其中依靠物料被高速甩出实现卸料，因而运行速度相对较快的是哪种方式？',
            options: ['离心卸料式', '导板卸料式', '完全卸料式', '重力卸料式'],
            answer: 0,
            explanation: '斗式提升机中，离心卸料式依靠物料在高速运行时产生的离心力被甩出料斗，其运行速度相对较快。'
        },
        {
            type: 'single',
            question: '下列哪种分拣设备通过将物品放置在载有小型传送带的小车上，当小车移动到指定分拣口时，传送带转动将物品送出，具有分拣精度高、处理能力强的特点？',
            options: ['滑块式分拣机', '斜导轮式分拣机', '交叉带式分拣机', '翻盘式分拣机'],
            answer: 2,
            explanation: '交叉带式分拣机就是由一系列装有可独立控制方向的小型传送带（即交叉带）的小车组成，特点是分拣精度高、处理能力强。'
        },
        {
            type: 'single',
            question: '在设计托盘单元货物码放时，为保证货物的稳定性，货物在托盘上的重心高度通常不应超过托盘短边长度的多少？',
            options: ['二分之一', '三分之二', '四分之三', '等同于短边长度'],
            answer: 1,
            explanation: '为确保托盘货物的稳定性，防止倾倒，货物码放后的重心高度不应超过托盘短边（宽度）的三分之二。'
        },
        // --- 判断题 ---
        {
            type: 'judge',
            question: '邮政的本质属性是以盈利为首要目标的商业性服务，承担国家保障公民用邮的义务是其次要职能。',
            answer: false,
            explanation: '邮政的本质属性是社会公共服务领域的主体，提供普遍服务和特殊服务。快递服务才是以市场为前提的商业服务。'
        },
        {
            type: 'judge',
            question: '邮件处理中心的转口业务是指从异地发往异地、仅在本处理中心做经转的邮件，此类邮件一般需要进行开拆和重新分拣。',
            answer: false,
            explanation: '转口业务的邮件一般不进行开拆和重新分拣，仅按线路转运。'
        },
        {
            type: 'judge',
            question: '我国的运输发展方针是：以公路为骨干、以铁路为基础、充分利用水运资源、注重发展航空运输、适当发展管道运输。',
            answer: false,
            explanation: '我国的运输发展方针是：以铁路为骨干、以公路为基础。'
        },
        {
            type: 'judge',
            question: '根据铁路车次编制规则，列车运行方向中，从支线到干线或向主要枢纽集结的列车方向为下行，车次编号为偶数。',
            answer: false,
            explanation: '该方向为上行，车次编号为偶数。反之（离京、从干线到支线）为下行，车次编号为奇数。'
        },
        {
            type: 'judge',
            question: '在港口检疫时，如果一艘船舶在昼间悬挂“QQ”字旗，则表示“本船没有染疫，请发给入境检疫证”。',
            answer: false,
            explanation: '悬挂“QQ”字旗表示“本船有染疫或者染疫嫌疑，请即刻实施检疫”。悬挂“Q”字旗才表示没有染疫。'
        },
        {
            type: 'judge',
            question: '在仓库管理中，储存密度越高，货物的拣选和移动就越方便，因此作业效率也一定越高。',
            answer: false,
            explanation: '仓库的储存密度与作业效率往往成反比。过高的储存密度可能导致通道狭窄、货物存取困难，从而降低作业效率。'
        },
        {
            type: 'judge',
            question: '无论是托盘横梁式货架、驶入式货架还是流利式货架，都能很好地实现货物的“先进先出”（FIFO）管理原则。',
            answer: false,
            explanation: '驶入式货架由于其“后进先出”的作业方式，通常难以实现严格的先进先出。流利式货架最适合先进先出。'
        },
        {
            type: 'judge',
            question: '自动化立体仓库对存储货物的品种几乎没有限制，能够灵活存储各种尺寸、重量和特性的货物。',
            answer: false,
            explanation: '自动化立体仓库对存储货物的品种有限制，例如对过长、过大、过重以及有特殊保管条件的货物（如需防爆、特定温湿度等）的存储能力有限或需要特殊设计。'
        },
        {
            type: 'judge',
            question: '板条式提升机在多层仓库中用于垂直运输，其S型工作方式由于进货口和出货口在不同方向，货物提升路径与空载板条返回路径不交叉，因此比C型工作方式效率更高。',
            answer: true,
            explanation: 'S型工作方式避免了C型可能形成的“十字交叉”导致的效率降低问题，因此效率更高。'
        },
        {
            type: 'judge',
            question: '主动式分拣系统的工作原理是通过从主输送线的下方或间隙中“弹出”特定装置（如滚轮、滚珠）来改变物品的运动方向，从而实现分拣。',
            answer: false,
            explanation: '这是弹出式分拣系统的工作原理。主动式分拣系统是通过主动的机械装置（如滑块、摆臂）将物品从主输送线上推或拉出去。'
        },
        // --- 简答题 ---
        {
            type: 'shortAnswer',
            question: '请简要叙述邮政网络的构成主要包括哪些部分，并说明邮件从甲地到乙地的传递过程（即路由）是如何实现的。',
            referenceAnswer: '构成：邮政网络主要由邮件入口、邮政网节点和投递终端三大部分通过邮路连接而成。\n路由过程：邮件从入口进入系统后，会根据目的地地址，经由各级处理中心（节点，如县、市、省级中心）逐级向上或向下传递，类似于互联网的数据包交换，最终确定最佳路径并送达投递终端。',
            explanation: '关键是理解“入口-节点-终端”的构成和“逐级传递”的路由过程。'
        },
        {
            type: 'shortAnswer',
            question: '公路运输和铁路运输是两种主要的陆路运输方式，请分别简述它们的主要优点和缺点。',
            referenceAnswer: '公路运输：\n优点：机动灵活，适应性强，可实现“门到门”；中短途速度快；投资少，周转快。\n缺点：运量小；成本高；持续性差；安全性较低，污染较大。\n铁路运输：\n优点：运力大，适合大宗货物；受天气影响小；便于多式联运；价格较低。\n缺点：建设成本高，周期长；无法“门到门”，灵活性差。',
            explanation: '概括两种运输方式的核心特点，对比其在灵活性、成本、运量等方面的差异。'
        },
        {
            type: 'shortAnswer',
            question: '仓库是现代物流系统中不可或缺的一环，请简述仓库在物流活动中通常承担的几项主要职能。',
            referenceAnswer: '1. 储存与保管职能：最基本的职能，保证货物完好。\n2. 调节供需职能：作为“蓄水池”，缓冲生产与消费在时间空间上的不平衡。\n3. 流通加工职能：进行分装、贴标等增值服务。\n4. 货物集散职能：汇集不同来源产品，形成规模后再分发。\n5. 配送职能：根据订单进行分拣、配装并组织送货。\n6. 信息采集与传递职能：处理和传递与仓储作业相关的各类信息。',
            explanation: '仓库的职能已从单纯的“保管”向综合性的物流服务中心演变。'
        },
        {
            type: 'shortAnswer',
            question: '自动化立体仓库（AS/RS）是一种先进的仓储系统，请简述其主要由哪些构成部分组成。',
            referenceAnswer: '自动化立体仓库主要由三大部分组成：\n1. 土建及公用工程设施：库房建筑、消防、照明、动力、通风系统等。\n2. 机械设备：高层货架、巷道堆垛机（核心设备）、货箱/托盘、出入库输送系统等周边搬运设备。\n3. 电气与电子设备：检测装置、控制装置、监控及调度设备（WCS）、计算机管理系统（WMS）、通信设备等。',
            explanation: 'AS/RS是一个集建筑、机械、电气、软件于一体的复杂系统。'
        },
        {
            type: 'shortAnswer',
            question: '请简述一个典型的自动化分拣系统的基本作业流程。为了保证分拣的准确性，在物品汇合到主分拣线后，通常还需要进行哪些关键的处理步骤？',
            referenceAnswer: '基本流程：合流 -> 识别 -> 分拣 -> 卸放。\n关键处理步骤：\n1. 贴边处理：利用导向装置使物品靠向输送带一侧，以保证后续识别和分拣装置能准确定位物品。\n2. 拉距处理：调整物品之间的间距，确保每个物品能被独立识别和处理，防止误识别或漏分拣。',
            explanation: '理解分拣的大流程，并掌握为保证准确性而进行的两个关键预处理步骤。'
        },
        // --- 计算题 ---
        {
            type: 'calculation',
            question: '某自动化立体仓库的一条巷道长度为100米，高度为20米。堆垛机水平运行的设计最高速度为150米/分钟，垂直运行的设计最高速度为40米/分钟。假定堆垛机从巷道一端的出入库台（坐标视为0,0）出发，将一个标准托盘货物存入位于巷道长度中点（即水平距离50米处）、高度中点（即垂直距离10米处）的货位。已知堆垛机在每个运动方向上，从静止启动加速到匀速以及从匀速减速到精确定位停止所需的总时间（不含匀速运行时间）为5秒，货叉完成一次存/取货物的作业时间为10秒。试计算堆垛机完成这一次单一入库作业（即从出入库台取货出发，将货物存入指定货位，然后空载返回出入库台）所需的总时间是多少秒？',
            referenceAnswer: '总时间为60秒。',
            calculationSteps: '1. 计算单程水平移动时间：\n   - 水平速度 = 150 m/min = 2.5 m/s\n   - 水平匀速时间 = 50 m / 2.5 m/s = 20 s\n   - 水平总时间 = 匀速时间 + 加减速时间 = 20 s + 5 s = 25 s\n2. 计算单程垂直移动时间：\n   - 垂直速度 = 40 m/min ≈ 0.667 m/s\n   - 垂直匀速时间 = 10 m / 0.667 m/s = 15 s\n   - 垂直总时间 = 匀速时间 + 加减速时间 = 15 s + 5 s = 20 s\n3. 计算去程时间（取水平和垂直中较长者）：\n   - T_去程 = Max(25 s, 20 s) = 25 s\n4. 计算返程时间（空载，假设与重载相同）：\n   - T_返程 = Max(25 s, 20 s) = 25 s\n5. 计算总循环时间：\n   - T_总 = T_去程 + T_货叉作业 + T_返程 = 25 s + 10 s + 25 s = 60 s',
            explanation: '核心在于理解堆垛机水平和垂直运动是同时进行的，因此单程移动时间取决于较慢的那个轴，即Max(水平时间, 垂直时间)。总时间 = 去程时间 + 货叉作业时间 + 返程时间。'
        },
        {
            type: 'calculation',
            question: '某工厂使用带式输送机输送成品袋装水泥，每袋水泥的质量为50千克。在输送带上，水泥袋沿长度方向紧密排列，平均每米输送带上放置2袋水泥。已知输送带的运行速度为0.8米/秒。请计算该输送机的理论物料输送能力（生产率）为多少吨/小时？',
            referenceAnswer: '理论输送能力为288吨/小时。',
            calculationSteps: '1. 计算单位长度承载质量 q：\n   - q = 2 袋/米 × 50 千克/袋 = 100 千克/米\n2. 使用生产率公式 Q = 3.6 × q × v：\n   - v = 0.8 米/秒\n   - Q = 3.6 × 100 kg/m × 0.8 m/s\n   - Q = 3.6 × 80 = 288 吨/小时',
            explanation: '关键是正确计算出单位长度承载质量q，然后代入公式 Q = 3.6 × q × v 进行计算。'
        }
    ],
    // all 题库将在 init 函数中动态创建
};

// 当前状态
let currentModule = '第一章'; // 默认启动第一章
let currentQuestionIndex = 0;
let answers = {}; // 存储当前模块的答案 { qIndex: answerValue }
let statistics = {
    total: 0,
    completed: 0,
    selectableCorrect: 0,
    selectableCompleted: 0 
};

// 初始化
function init() {
    // 初始化综合题库 (深拷贝)
    questionBank.all = [];
    const baseModulesKeys = ['第一章', '第二章', '第三章', '第四章', '第五章', '第六章', '模拟卷'];
    baseModulesKeys.forEach(modKey => {
        if (questionBank[modKey] && Array.isArray(questionBank[modKey])) {
            // 为每个问题添加原始模块信息，便于综合练习时追溯
            questionBank[modKey].forEach(q => {
                const newQ = JSON.parse(JSON.stringify(q));
                newQ.originalModule = modKey; // 添加来源信息
                questionBank.all.push(newQ);
            });
        }
    });
    
    // Fisher-Yates shuffle 算法打乱综合题库顺序
    for (let i = questionBank.all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionBank.all[i], questionBank.all[j]] = [questionBank.all[j], questionBank.all[i]];
    }

    selectModule('第一章'); 
}

// 选择模块
function selectModule(module) {
    currentModule = module;
    currentQuestionIndex = 0;
    
    // 重置答题记录和统计数据
    const questions = questionBank[currentModule];
    if (questions) {
        questions.forEach(q => {
            delete q.answered;
            delete q.userCorrect;
        });
    }
    answers = {}; 
    
    statistics.completed = 0;
    statistics.selectableCorrect = 0;
    statistics.selectableCompleted = 0;
    
    document.querySelectorAll('.module-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const allModuleButtons = document.querySelectorAll('.module-btn');
    for (let btn of allModuleButtons) {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`selectModule('${module}')`)) {
            btn.classList.add('active');
            break;
        }
    }
    
    showQuestion();
    updateStatistics();
}

// 实时更新简答/计算题答案
function updateTextAnswer() {
    const textarea = document.getElementById('textAnswerInput');
    if (textarea) {
        answers[currentQuestionIndex] = textarea.value;
    }
}


// 显示题目
function showQuestion() {
    const questions = questionBank[currentModule];
    const questionArea = document.getElementById('questionArea');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!questions || questions.length === 0) {
        questionArea.innerHTML = '<p style="text-align:center; padding: 20px; font-size: 1.2em;">该模块暂无题目或正在建设中。</p>';
        if(prevBtn) prevBtn.disabled = true;
        if(nextBtn) nextBtn.disabled = true;
        updateStatistics(); 
        return;
    }

    const question = questions[currentQuestionIndex];
    let html = '';

    html += `<div class="question-container">`;
    let questionTitle = `第${currentQuestionIndex + 1}题（共${questions.length}题）`;
    if (question.originalModule && currentModule === 'all') { // 只在综合练习模式下显示来源
        questionTitle += ` [来自: ${question.originalModule}]`;
    }
    questionTitle += `：${question.question}`;
    html += `<div class="question">${questionTitle}</div>`;


    switch (question.type) {
        case 'single':
        case 'multiple':
            html += question.type === 'multiple' ? '<p style="color: #7f8c8d; margin-bottom: 10px;">（多选题）</p>' : '';
            html += '<div class="options">';
            question.options.forEach((option, index) => {
                html += `<div class="option" onclick="selectOption(${index}, ${question.type === 'multiple'})">${String.fromCharCode(65 + index)}. ${option}</div>`;
            });
            html += '</div>';
            break;
        case 'judge':
            html += '<div class="options">';
            html += '<div class="option" onclick="selectOption(true, false)">√ 正确</div>';
            html += '<div class="option" onclick="selectOption(false, false)">× 错误</div>';
            html += '</div>';
            break;
        case 'shortAnswer':
        case 'calculation':
            html += `<textarea class="text-answer-area" id="textAnswerInput" placeholder="请在此输入您的答案..." oninput="updateTextAnswer()"></textarea>`;
            break;
    }

    html += `<button class="submit-btn" id="submitBtn" onclick="submitAnswer()">提交答案</button>`;
    html += '<div id="feedback"></div>';
    html += '</div>';

    questionArea.innerHTML = html;

    if(prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
    if(nextBtn) nextBtn.disabled = currentQuestionIndex === questions.length - 1;

    if (answers[currentQuestionIndex] !== undefined) {
        restoreAnswer(question.type);
    }
    
    if (question.answered) {
        showFeedback(question); 
        const submitButton = document.getElementById('submitBtn');
        if(submitButton) submitButton.disabled = true;
        
        // 禁用所有选项
        document.querySelectorAll('.option').forEach(el => el.style.pointerEvents = 'none');
        if(document.getElementById('textAnswerInput')) {
            document.getElementById('textAnswerInput').disabled = true;
        }

        if (question.type !== 'shortAnswer' && question.type !== 'calculation') {
            highlightSubmittedAnswers(question);
        }
    }
}

// 选择选项
function selectOption(value, isMultiple) { // value 是选项的索引(数字)或判断题的布尔值
    const question = questionBank[currentModule][currentQuestionIndex];
    if (question.answered) return; 
    const optionsElements = document.querySelectorAll('.option');
    if (!isMultiple) { // 单选或判断题
        optionsElements.forEach(opt => {
            opt.classList.remove('selected');
        });
        if (question.type === 'judge') {
            const selectedOptionIndex = value ? 0 : 1;
            if (optionsElements[selectedOptionIndex]) {
                optionsElements[selectedOptionIndex].classList.add('selected');
            }
            answers[currentQuestionIndex] = value;
        } else { // 单选题
            if (optionsElements[value]) {
                optionsElements[value].classList.add('selected');
            }
            answers[currentQuestionIndex] = value;
        }
    } else { // 多选题
        const optionElement = optionsElements[value];
        if (optionElement) {
            optionElement.classList.toggle('selected');
        }
        
        if (!answers[currentQuestionIndex] || !Array.isArray(answers[currentQuestionIndex])) {
            answers[currentQuestionIndex] = [];
        }
        
        const answerIndexInArray = answers[currentQuestionIndex].indexOf(value);
        if (answerIndexInArray > -1) {
            answers[currentQuestionIndex].splice(answerIndexInArray, 1);
        } else {
            answers[currentQuestionIndex].push(value);
        }
        answers[currentQuestionIndex].sort((a, b) => a - b);
    }
}

// 显示反馈的辅助函数
function showFeedback(question) {
    const feedbackDiv = document.getElementById('feedback');
    if (!feedbackDiv) return;
    let feedbackHtml = '';

    if (question.type === 'shortAnswer' || question.type === 'calculation') {
        feedbackHtml = `<div class="feedback">`; 
        feedbackHtml += `<strong>参考答案/要点：</strong><div class="feedback-reference">${question.referenceAnswer || '暂无参考答案'}</div>`;
        if (question.type === 'calculation' && question.calculationSteps) {
            feedbackHtml += `<br><strong>计算步骤：</strong><div class="feedback-reference">${question.calculationSteps.replace(/\n/g, '<br>')}</div>`;
        }
        if (question.explanation) {
            feedbackHtml += `<br><strong>补充解析：</strong>${question.explanation}`;
        }
        feedbackHtml += '</div>';
    } else { 
        const isCorrect = question.userCorrect;
        feedbackHtml = `<div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">`;
        feedbackHtml += isCorrect ? '✓ 回答正确！' : '✗ 回答错误！';
        if (question.explanation) {
            feedbackHtml += `<br><strong>解析：</strong>${question.explanation}`;
        }
        feedbackHtml += '</div>';
    }
    feedbackDiv.innerHTML = feedbackHtml;
}

// 高亮已提交的答案选项
function highlightSubmittedAnswers(question) {
    const userAnswer = answers[currentQuestionIndex];
    const optionsElements = document.querySelectorAll('.option');
    if (!optionsElements || optionsElements.length === 0) return;

    switch (question.type) {
        case 'single':
            if (userAnswer !== undefined && userAnswer !== question.answer && optionsElements[userAnswer]) {
                optionsElements[userAnswer].classList.add('incorrect');
            }
            if (optionsElements[question.answer]) {
                optionsElements[question.answer].classList.add('correct');
            }
            break;
        case 'judge':
            const userChoiceOptionIndex = userAnswer ? 0 : 1;
            const correctOptionIndex = question.answer ? 0 : 1;
            if (userAnswer !== undefined && userAnswer !== question.answer && optionsElements[userChoiceOptionIndex]) {
                optionsElements[userChoiceOptionIndex].classList.add('incorrect');
            }
            if (optionsElements[correctOptionIndex]) {
                optionsElements[correctOptionIndex].classList.add('correct');
            }
            break;
        case 'multiple':
            optionsElements.forEach((opt, idx) => {
                const isSelectedByUser = userAnswer && userAnswer.includes(idx);
                const isCorrectAnswer = question.answer.includes(idx);
                if (isSelectedByUser && !isCorrectAnswer) {
                    opt.classList.add('incorrect');
                }
                if (isCorrectAnswer) {
                    opt.classList.add('correct');
                }
            });
            break;
    }
}

// 提交答案
function submitAnswer() {
    const questions = questionBank[currentModule];
    const question = questions[currentQuestionIndex];
    let userAnswer = answers[currentQuestionIndex];
    let isCorrect = false;

    if (question.answered) return; // 防止重复提交

    if ((question.type === 'single' || question.type === 'multiple' || question.type === 'judge') && 
        (userAnswer === undefined || (Array.isArray(userAnswer) && userAnswer.length === 0))) {
        alert('请先选择答案！');
        return;
    }
    if ((question.type === 'shortAnswer' || question.type === 'calculation')) {
        const textarea = document.getElementById('textAnswerInput');
        userAnswer = textarea ? textarea.value : "";
        answers[currentQuestionIndex] = userAnswer;
    }

    question.answered = true;
    statistics.completed++;

    if (question.type === 'single' || question.type === 'judge') {
        isCorrect = userAnswer === question.answer;
        question.userCorrect = isCorrect;
        statistics.selectableCompleted++;
        if (isCorrect) statistics.selectableCorrect++;
    } else if (question.type === 'multiple') {
        const sortedUserAnswer = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
        const sortedCorrectAnswer = [...question.answer].sort();
        isCorrect = JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer);
        question.userCorrect = isCorrect;
        statistics.selectableCompleted++;
        if (isCorrect) statistics.selectableCorrect++;
    }

    showFeedback(question);
    if (question.type !== 'shortAnswer' && question.type !== 'calculation') {
        highlightSubmittedAnswers(question);
    }

    document.getElementById('submitBtn').disabled = true;
    document.querySelectorAll('.option').forEach(el => el.style.pointerEvents = 'none');
    if(document.getElementById('textAnswerInput')) {
        document.getElementById('textAnswerInput').disabled = true;
    }

    updateStatistics();
}

// 恢复答案显示
function restoreAnswer(type) {
    const answer = answers[currentQuestionIndex];
    if (answer === undefined) return;
    const optionsElements = document.querySelectorAll('.option');

    switch (type) {
        case 'single':
             if (typeof answer === 'number' && optionsElements[answer]) {
                 optionsElements[answer].classList.add('selected');
             }
            break;
        case 'judge':
             const judgeOptionToSelect = answer ? 0 : 1;
             if (optionsElements[judgeOptionToSelect]) {
                 optionsElements[judgeOptionToSelect].classList.add('selected');
             }
             break;
        case 'multiple':
            if (Array.isArray(answer)) {
                answer.forEach(index => {
                   if(optionsElements[index]) optionsElements[index].classList.add('selected');
                });
            }
            break;
        case 'shortAnswer':
        case 'calculation':
            const textarea = document.getElementById('textAnswerInput');
            if (textarea && typeof answer === 'string') {
                textarea.value = answer;
            }
            break;
    }
}

// 更新统计信息
function updateStatistics() {
    const questions = questionBank[currentModule];
    statistics.total = (questions && questions.length) ? questions.length : 0;
    
    const totalQuestionsEl = document.getElementById('totalQuestions');
    const completedQuestionsEl = document.getElementById('completedQuestions');
    const accuracyEl = document.getElementById('accuracy');
    const progressBarEl = document.getElementById('progressBar');
    if(totalQuestionsEl) totalQuestionsEl.textContent = statistics.total;
    if(completedQuestionsEl) completedQuestionsEl.textContent = statistics.completed;
    
    const accuracy = statistics.selectableCompleted > 0 ? 
        Math.round((statistics.selectableCorrect / statistics.selectableCompleted) * 100) : 0;
    if(accuracyEl) accuracyEl.textContent = accuracy + '%';
    
    const progress = statistics.total > 0 ? 
        Math.round((statistics.completed / statistics.total) * 100) : 0;
    if(progressBarEl) progressBarEl.style.width = progress + '%';
}

// 导航功能
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    const questions = questionBank[currentModule];
    if (questions && currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// 页面加载完成后初始化
window.onload = init;