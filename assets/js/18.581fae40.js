(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{213:function(r,e,t){"use strict";t.r(e);var _=t(0),n=Object(_.a)({},function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"完整功能图表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整功能图表","aria-hidden":"true"}},[r._v("#")]),r._v(" 完整功能图表")]),r._v(" "),t("h2",{attrs:{id:"接口功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口功能","aria-hidden":"true"}},[r._v("#")]),r._v(" 接口功能")]),r._v(" "),t("table",[t("thead",[t("tr",[t("th",[r._v("方法及说明")]),r._v(" "),t("th",[r._v("URL")]),r._v(" "),t("th",[r._v("Request")]),r._v(" "),t("th",[r._v("Response")])])]),r._v(" "),t("tbody",[t("tr",[t("td",[r._v("GET: "),t("br"),r._v(" 普通获取数据，"),t("br"),r._v(" 可用浏览器调试")]),r._v(" "),t("td",[r._v("base_url/get/")]),r._v(" "),t("td",[r._v("{    TableName:{      … "),t("br"),r._v("    }"),t("br"),r._v("} "),t("br"),r._v(" {…}内为限制条件"),t("br"),t("br"),r._v(" 例如获取一个id为235的Moment："),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "id":235'),t("br"),r._v("    }"),t("br"),r._v("}")]),r._v(" "),t("td",[r._v("{"),t("br"),r._v("    TableName:{"),t("br"),r._v("      ..."),t("br"),r._v("    },"),t("br"),r._v('    "code":200,'),t("br"),r._v('    "msg":"success"'),t("br"),r._v("}"),t("br"),r._v("例如"),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "id":235,'),t("br"),r._v('      "userId":38710,'),t("br"),r._v('      "content":"APIJSON,let interfaces and documents go to hell !"'),t("br"),r._v("    },"),t("br"),r._v('    "code":200,'),t("br"),r._v('    "msg":"success"'),t("br"),r._v(" }")])]),r._v(" "),t("tr",[t("td",[r._v("HEAD: "),t("br"),r._v(" 普通获取数量，"),t("br"),r._v(" 可用浏览器调试")]),r._v(" "),t("td",[r._v("base_url/head/")]),r._v(" "),t("td",[r._v("{"),t("br"),r._v("    TableName:{"),t("br"),r._v("      …"),t("br"),r._v("    }"),t("br"),r._v(" } "),t("br"),r._v(" {…}内为限制条件 "),t("br"),t("br"),r._v(" 例如获取一个id为38710的User所发布的Moment总数："),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "userId":38710'),t("br"),r._v("    }"),t("br"),r._v("}")]),r._v(" "),t("td",[r._v("{"),t("br"),r._v("    TableName:{"),t("br"),r._v('      "code":200,'),t("br"),r._v('      "msg":"success",'),t("br"),r._v('      "count":10'),t("br"),r._v("    },"),t("br"),r._v('    "code":200,'),t("br"),r._v('    "msg":"success"'),t("br"),r._v("} "),t("br"),r._v(" 例如"),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "code":200,'),t("br"),r._v('      "msg":"success",'),t("br"),r._v('      "count":10'),t("br"),r._v("    },"),t("br"),r._v('    "code":200,'),t("br"),r._v('     "msg":"success"'),t("br"),r._v("}")])]),r._v(" "),t("tr",[t("td",[r._v("GETS: "),t("br"),r._v(" 安全/私密获取数据，"),t("br"),r._v(" 用于获取钱包等"),t("br"),r._v("对安全性要求高的数据")]),r._v(" "),t("td",[r._v("base_url/gets/")]),r._v(" "),t("td",[r._v('最外层加一个"tag":tag，其它同GET')]),r._v(" "),t("td",[r._v("同GET")])]),r._v(" "),t("tr",[t("td",[r._v("HEADS: "),t("br"),r._v(" 安全/私密获取数量，"),t("br"),r._v(" 用于获取银行卡数量等"),t("br"),r._v("对安全性要求高的数据总数")]),r._v(" "),t("td",[r._v("base_url/heads/")]),r._v(" "),t("td",[r._v('最外层加一个"tag":tag，其它同HEAD')]),r._v(" "),t("td",[r._v("同HEAD")])]),r._v(" "),t("tr",[t("td",[r._v("POST: "),t("br"),r._v(" 新增数据")]),r._v(" "),t("td",[r._v("base_url/post/")]),r._v(" "),t("td",[r._v("{"),t("br"),r._v("    TableName:{"),t("br"),r._v("      …"),t("br"),r._v("    },"),t("br"),r._v('    "tag":tag'),t("br"),r._v("} "),t("br"),r._v(" {…}中id由后端生成，不能传 "),t("br"),t("br"),r._v("例如一个id为38710的User发布一个新Moment："),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "userId":38710,'),t("br"),r._v('      "content":"APIJSON,let interfaces and documents go to hell !"'),t("br"),r._v("    },"),t("br"),r._v('    "tag":"Moment"'),t("br"),r._v("}")]),r._v(" "),t("td",[r._v("{"),t("br"),r._v("    TableName:{"),t("br"),r._v('      "code":200,'),t("br"),r._v('      "msg":"success",'),t("br"),r._v('      "id":38710'),t("br"),r._v("    },"),t("br"),r._v('    "code":200,'),t("br"),r._v('    "msg":"success"'),t("br"),r._v("}"),t("br"),r._v("例如"),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "code":200,'),t("br"),r._v('      "msg":"success",'),t("br"),r._v('      "id":120'),t("br"),r._v("    },"),t("br"),r._v('    "code":200,'),t("br"),r._v('    "msg":"success"'),t("br"),r._v("}")])]),r._v(" "),t("tr",[t("td",[r._v("PUT: "),t("br"),r._v(" 修改数据，"),t("br"),r._v(" 只修改所传的字段")]),r._v(" "),t("td",[r._v("base_url/put/")]),r._v(" "),t("td",[r._v("{"),t("br"),r._v("    TableName:{"),t("br"),r._v('      "id":id,'),t("br"),r._v("      …"),t("br"),r._v("    },"),t("br"),r._v('    "tag":tag'),t("br"),r._v("} "),t("br"),r._v(" {…}中id必传 "),t("br"),t("br"),r._v("例如修改id为235的Moment的content："),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "id":235,'),t("br"),r._v('      "content":"APIJSON,let interfaces and documents go to hell !"'),t("br"),r._v("    },"),t("br"),r._v('    "tag":"Moment"'),t("br"),r._v("}")]),r._v(" "),t("td",[r._v("同POST")])]),r._v(" "),t("tr",[t("td",[r._v("DELETE: "),t("br"),r._v(" 删除数据")]),r._v(" "),t("td",[r._v("base_url/delete/")]),r._v(" "),t("td",[r._v("{"),t("br"),r._v("    TableName:{"),t("br"),r._v('      "id":id'),t("br"),r._v("    },"),t("br"),r._v('    "tag":tag'),t("br"),r._v("} "),t("br"),r._v(" {…}中id必传，一般只传id "),t("br"),t("br"),r._v("例如删除id为120的Moment："),t("br"),r._v("{"),t("br"),r._v('    "Moment":{'),t("br"),r._v('      "id":120'),t("br"),r._v("    },"),t("br"),r._v('    "tag":"Moment"'),t("br"),r._v("}")]),r._v(" "),t("td",[r._v("同POST")])])])]),r._v(" "),t("p",[r._v("1.TableName指要查询的数据库表Table的名称字符串。第一个字符为大写字母，剩下的字符要符合英语字母、数字、下划线中的任何一种。对应的值的类型为JSONObject，结构是 {...}，里面放的是Table的字段(列名)。下同。"),t("br"),r._v('\n2."tag":tag 后面的tag是非GET、HEAD请求中匹配请求的JSON结构的key，一般是要查询的table的名称，由后端Request表中指定。下同。'),t("br"),r._v("\n3.GET、HEAD请求是开放请求，可任意组合任意嵌套。其它请求为受限制的安全/私密请求，对应的 方法、tag、结构 都必须和 后端Request表中所指定的 一一对应，否则请求将不被通过。下同。"),t("br"),r._v("\n4.GETS与GET、HEADS与HEAD分别为同一类型的操作方法，请求稍有不同但返回结果相同。下同。"),t("br"),r._v("\n5.在HTTP通信中，GET、HEAD方法一般用HTTP GET请求，其它一般用HTTP POST请求。下同。"),t("br"),r._v("\n6.所有JSONObject都视为容器(或者文件夹)，结构为 {...} ，里面可以放普通对象或子容器。下同。"),t("br"),r._v("\n7.每个对象都有一个唯一的路径(或者叫地址)，假设对象名为refKey，则用 key0/key1/.../refKey 表示。下同。")]),r._v(" "),t("p",[r._v("📓注意")]),r._v(" "),t("ol",[t("li",[r._v("Oracle数据库直接使用的是当前时间的LONG值，作为插入时新数据ID的")])]),r._v(" "),t("br"),r._v(" "),t("h2",{attrs:{id:"功能符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能符","aria-hidden":"true"}},[r._v("#")]),r._v(" 功能符")]),r._v(" "),t("table",[t("thead",[t("tr",[t("th",[r._v("功能")]),r._v(" "),t("th",[r._v("键值对格式")]),r._v(" "),t("th",[r._v("使用示例")])])]),r._v(" "),t("tbody",[t("tr",[t("td",[r._v("查询数组")]),r._v(" "),t("td",[r._v('"key[]":{}，后面是JSONObject，key可省略。当key和里面的Table名相同时，Table会被提取出来，即 {Table:{Content}} 会被转化为 {Content}')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%5B%5D%22:%7B%22count%22:3,%22User%22:%7B%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('{"User[]":{"User":{}}}'),t("OutboundLink")],1),r._v('，查询一个User数组。这里key和Table名都是User，User会被提取出来，即 {"User":{"id", ...}} 会被转化为 {"id", ...}')])]),r._v(" "),t("tr",[t("td",[r._v("匹配选项范围")]),r._v(" "),t("td",[r._v('"key{}":[]，后面是JSONArray，作为key可取的值的选项')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%5B%5D%22:%7B%22count%22:3,%22User%22:%7B%22id%7B%7D%22:%5B38710,82001,70793%5D%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"id{}":[38710,82001,70793]'),t("OutboundLink")],1),r._v("，查询id符合38710,82001,70793中任意一个的一个User数组")])]),r._v(" "),t("tr",[t("td",[r._v("匹配条件范围")]),r._v(" "),t("td",[r._v("\"key{}\":\"条件0,条件1...\"，条件为任意SQL比较表达式字符串，非Number类型必须用''包含条件的值，如'a'")]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%5B%5D%22:%7B%22count%22:3,%22User%22:%7B%22id%7B%7D%22:%22%3C=80000,%3E90000%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"id{}":"<=80000,>90000"'),t("OutboundLink")],1),r._v("，查询id符合id<=80000 | id>90000的一个User数组")])]),r._v(" "),t("tr",[t("td",[r._v("包含选项范围")]),r._v(" "),t("td",[r._v('"key<>":Object  =>  "key<>":[Object]，key对应值的类型必须为JSONArray，Object类型不能为JSON')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%5B%5D%22:%7B%22count%22:3,%22User%22:%7B%22contactIdList%3C%3E%22:38710%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"contactIdList<>":38710'),t("OutboundLink")],1),r._v("，查询contactIdList包含38710的一个User数组")])]),r._v(" "),t("tr",[t("td",[r._v("远程调用函数")]),r._v(" "),t("td",[r._v('"key()":"函数表达式"，函数表达式为 function(key0,key1...)，会调用后端对应的函数 function(JSONObject request, String key0, String key1...)')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22Moment%22:%7B%22id%22:301,%22isPraised()%22:%22isContain(praiseUserIdList,userId)%22%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"isPraised()":"isContain(praiseUserIdList,userId)"'),t("OutboundLink")],1),r._v('，会调用 boolean isContain(JSONObject request, String array, String value) 函数，然后变为 "isPraised":true 这种（假设点赞用户id列表包含了userId，即这个User点了赞）')])]),r._v(" "),t("tr",[t("td",[r._v("引用赋值")]),r._v(" "),t("td",[r._v('"key@":"引用路径"，引用路径为用/分隔的字符串。以/开头的是缺省引用路径，从声明key所处容器的父容器路径开始；其它是完整引用路径，从最外层开始。'),t("br"),r._v(' 被引用的refKey必须在声明key的上面。如果对refKey的容器指定了返回字段，则被引用的refKey必须写在@column对应的值内，例如 "@column":"refKey,key1,..."')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22Moment%22:%7B%22userId%22:38710%7D,%22User%22:%7B%22id@%22:%22%252FMoment%252FuserId%22%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"Moment":{'),t("br"),r._v('    "userId":38710'),t("br"),r._v("},"),t("br"),r._v('"User":{'),t("br"),r._v('    "id@":"/Moment/userId"'),t("br"),r._v("}"),t("OutboundLink")],1),t("br"),r._v(" User内的id引用了与User同级的Moment内的userId，"),t("br"),r._v("即User.id = Moment.userId，请求完成后"),t("br"),r._v(' "id@":"/Moment/userId" 会变成 "id":38710')])]),r._v(" "),t("tr",[t("td",[r._v("模糊搜索")]),r._v(" "),t("td",[r._v('"key$":"SQL搜索表达式"  =>  "key$":["SQL搜索表达式"]，任意SQL搜索表达式字符串，如 %key%(包含key), key%(以key开始), %k%e%y%(包含字母k,e,y) 等，%表示任意字符')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%5B%5D%22:%7B%22count%22:3,%22User%22:%7B%22name$%22:%22%2525m%2525%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"name$":"%m%"'),t("OutboundLink")],1),r._v('，查询name包含"m"的一个User数组')])]),r._v(" "),t("tr",[t("td",[r._v("正则匹配")]),r._v(" "),t("td",[r._v('"key?":"正则表达式"  =>  "key?":["正则表达式"]，任意正则表达式字符串，如 ^[0-9]+$ ，可用于高级搜索')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%5B%5D%22:%7B%22count%22:3,%22User%22:%7B%22name%253F%22:%22%5E%5B0-9%5D%252B$%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"name?":"^[0-9]+$"'),t("OutboundLink")],1),r._v("，查询name中字符全为数字的一个User数组")])]),r._v(" "),t("tr",[t("td",[r._v("新建别名")]),r._v(" "),t("td",[r._v('"name:alias"，name映射为alias，用alias替代name。可用于 column,Table,SQL函数 等。只用于GET类型、HEAD类型的请求')]),r._v(" "),t("td",[t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22Comment%22:%7B%22@column%22:%22id,toId:parentId%22,%22id%22:51%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"@column":"toId:parentId"'),t("OutboundLink")],1),r._v("，将查询的字段toId变为parentId返回")])]),r._v(" "),t("tr",[t("td",[r._v("增加 或 扩展")]),r._v(" "),t("td",[r._v('"key+":Object，Object的类型由key指定，且类型为Number,String,JSONArray中的一种。如 82001,"apijson",["url0","url1"] 等。只用于PUT请求')]),r._v(" "),t("td",[r._v('"praiseUserIdList+":[82001]，添加一个点赞用户id，即这个用户点了赞')])]),r._v(" "),t("tr",[t("td",[r._v("减少 或 去除")]),r._v(" "),t("td",[r._v('"key-":Object，与"key+"相反')]),r._v(" "),t("td",[r._v('"balance-":100.00，余额减少100.00，即花费了100元')])]),r._v(" "),t("tr",[t("td",[r._v("逻辑运算")]),r._v(" "),t("td",[r._v("&, |, ! 逻辑运算符 "),t("br"),t("br"),r._v('① & 可用于"key&{}":"条件"等'),t("br"),t("br"),r._v('② | 可用于"key|{}":"条件", "key|{}":[]等，一般可省略'),t("br"),t("br"),r._v('③ ! 可单独使用，如"key!":Object，也可像&,|一样配合其他功能符使用')]),r._v(" "),t("td",[r._v("① "),t("a",{attrs:{href:"http://apijson.cn:8080/head/%7B%22User%22:%7B%22id&%7B%7D%22:%22%3E80000,%3C=90000%22%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"id&{}":">80000,<=90000"'),t("OutboundLink")],1),r._v("，即id满足id>80000 & id<=90000"),t("br"),t("br"),r._v(" ② "),t("a",{attrs:{href:"http://apijson.cn:8080/head/%7B%22User%22:%7B%22id%7C%7B%7D%22:%22%3E90000,%3C=80000%22%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"id|{}":">90000,<=80000"'),t("OutboundLink")],1),r._v('，同"id{}":">90000,<=80000"，即id满足id>90000 | id<=80000'),t("br"),t("br"),r._v(" ③ "),t("a",{attrs:{href:"http://apijson.cn:8080/head/%7B%22User%22:%7B%22id!%7B%7D%22:%5B82001,38710%5D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"id!{}":[82001,38710]'),t("OutboundLink")],1),r._v("，即id满足 ! (id=82001 | id=38710)，可过滤黑名单的消息")])]),r._v(" "),t("tr",[t("td",[r._v("数组关键词")]),r._v(" "),t("td",[r._v('"key":Object，key为 "[]":{} 中{}内的关键词，Object的类型由key指定'),t("br"),t("br"),r._v('① "count":Integer，查询数量，假设允许查询数组的最大数量为max(默认为100)，则当count在1~max范围内时，查询count个；否则查询max个 '),t("br"),t("br"),r._v('② "page":Integer，查询页码，从0开始，一般和count一起用'),t("br"),t("br"),r._v('③ "query":Integer，查询内容'),t("br"),r._v("0-对象，1-总数，2-以上全部"),t("br"),r._v('总数关键词为total，和query同级，通过引用赋值得到，如 "total@":"/[]/total" '),t("br"),r._v("这里query及total仅为GET类型的请求提供方便，一般可直接用HEAD类型的请求获取总数"),t("br"),t("br"),r._v('④ "join":"&/Table0/key0@,</Table1/key1@"'),t("br"),r._v("多表连接方式："),t("br"),r._v(' "<" - LEFT JOIN '),t("br"),r._v(' ">" - RIGHT JOIN '),t("br"),r._v(' "&" - INNER JOIN '),t("br"),r._v(' "|" - FULL JOIN '),t("br"),r._v('  "!" - OUTTER JOIN '),t("br")]),r._v(" "),t("td",[r._v("① 查询User数组，最多5个："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:5,%22User%22:%7B%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"count":5'),t("OutboundLink")],1),t("br"),t("br"),r._v(" ② 查询第3页的User数组，每页5个："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:5,%22page%22:3,%22User%22:%7B%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"count":5,'),t("br"),r._v('"page":3'),t("OutboundLink")],1),t("br"),t("br"),r._v(" ③ 查询User数组和对应的User总数："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22query%22:2,%22count%22:5,%22User%22:%7B%7D%7D,%22total@%22:%22%252F%5B%5D%252Ftotal%22%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"[]":{'),t("br"),r._v('    "query":2,'),t("br"),r._v('    "User":{}'),t("br"),r._v("},"),t("br"),r._v('"total@":"/[]/total"'),t("OutboundLink")],1),t("br"),r._v("总页数、是否有下一页等信息可通过 total,count,page 得出，"),t("br"),r._v("总页数 int totalPage = Math.ceil(total / count)"),t("br"),r._v("是否有下一页 boolean hasNextPage = total > count*page"),t("br"),r._v("是否为第一页 boolean isFirstPage = page <= 0"),t("br"),r._v("是否为最后一页 boolean isLastPage = total <= count*page"),t("br"),r._v("... "),t("br"),t("br"),r._v(" ④ Moment INNER JOIN User LEFT JOIN Comment："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:5,%22join%22:%22&%252FUser%252Fid@,%3C%252FComment%252FmomentId@%22,%22Moment%22:%7B%22@column%22:%22id,userId,content%22%7D,%22User%22:%7B%22name%253F%22:%22t%22,%22id@%22:%22%252FMoment%252FuserId%22,%22@column%22:%22id,name,head%22%7D,%22Comment%22:%7B%22momentId@%22:%22%252FMoment%252Fid%22,%22@column%22:%22id,momentId,content%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"[]":{'),t("br"),r._v('    "join": "&/User/id@,</Comment/momentId@",'),t("br"),r._v('    "Moment":{},'),t("br"),r._v('    "User":{'),t("br"),r._v('      "name?":"t",'),t("br"),r._v('      "id@": "/Moment/userId"'),t("br"),r._v("    },"),t("br"),r._v('    "Comment":{'),t("br"),r._v('      "momentId@": "/Moment/id"'),t("br"),r._v("    }"),t("br"),r._v("}"),t("OutboundLink")],1)])]),r._v(" "),t("tr",[t("td",[r._v("对象关键词，可自定义")]),r._v(" "),t("td",[r._v('"@key":Object，@key为 Table:{} 中{}内的关键词，Object的类型由@key指定'),t("br"),t("br"),r._v('① "@combine":"&key0,|key1,!key2,..."，条件组合方式，| 可省略'),t("br"),t("br"),r._v('② "@column":"column;function(arg)..."，返回字段'),t("br"),t("br"),r._v('③ "@order":"column0+,column1-..."，排序方式'),t("br"),t("br"),r._v('④ "@group":"column0,column1..."，分组方式。如果@column里声明了Table的id，则id也必须在@group中声明；其它情况下必须满足至少一个条件:'),t("br"),r._v("1.分组的key在@column里声明"),t("br"),r._v("2.Table主键在@group中声明 "),t("br"),t("br"),r._v('⑤ "@having":"function0(...)?value0;function1(...)?value1;function2(...)?value2..."，SQL函数条件，一般和@group一起用，函数一般在@column里声明'),t("br"),t("br"),r._v('⑥ "@otherKey": Object，自定义关键词，名称和以上系统关键词不一样，且原样返回上传的值')]),r._v(" "),t("td",[r._v("① 搜索name或tag任何一个字段包含字符a的User列表："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%5B%5D%22:%7B%22count%22:10,%22User%22:%7B%22@column%22:%22id,name,tag%22,%22name%253F%22:%22a%22,%22tag%253F%22:%22a%22,%22@combine%22:%22name%253F,tag%253F%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"name?":"a",'),t("br"),r._v('"tag?":"a",'),t("br"),r._v('"@combine":"name?,tag?"'),t("OutboundLink")],1),t("br"),t("br"),r._v(" ② 只查询id,sex,name这几列并且请求结果也按照这个顺序："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%22:%7B%22@column%22:%22id,sex,name%22,%22id%22:38710%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"@column":"id,sex,name"'),t("OutboundLink")],1),t("br"),t("br"),r._v(" ③ 查询按 name降序、id默认顺序 排序的User数组："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:10,%22User%22:%7B%22@column%22:%22name,id%22,%22@order%22:%22name-,id%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"@order":"name-,id"'),t("OutboundLink")],1),t("br"),t("br"),r._v(" ④ 查询按userId分组的Moment数组："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:10,%22Moment%22:%7B%22@column%22:%22userId,id%22,%22@group%22:%22userId,id%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"@group":"userId,id"'),t("OutboundLink")],1),t("br"),t("br"),r._v(" ⑤ 查询 按userId分组、id最大值>=100 的Moment数组："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:10,%22Moment%22:%7B%22@column%22:%22userId%253Bmax(id)%22,%22@group%22:%22userId%22,%22@having%22:%22max(id)%3E=100%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"@column":"userId;max(id)",'),t("br"),r._v('"@group":"userId",'),t("br"),r._v('"@having":"max(id)>=100"'),t("OutboundLink")],1),t("br"),r._v("还可以指定函数返回名："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:10,%22Moment%22:%7B%22@column%22:%22userId%253Bmax(id):maxId%22,%22@group%22:%22userId%22,%22@having%22:%22maxId%3E=100%22%7D%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"@column":"userId;max(id):maxId",'),t("br"),r._v('"@group":"userId",'),t("br"),r._v('"@having":"maxId>=100"'),t("OutboundLink")],1),t("br"),t("br"),r._v(" ⑥ 从pictureList获取第0张图片："),t("br"),t("a",{attrs:{href:"http://apijson.cn:8080/get/%7B%22User%22:%7B%22id%22:38710,%22@position%22:0,%22firstPicture()%22:%22getFromArray(pictureList,@position)%22%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[r._v('"@position":0, //这里@position为自定义关键词'),t("br"),r._v('"firstPicture()":"getFromArray(pictureList,@position)"'),t("OutboundLink")],1)])])])]),r._v(" "),t("br")])},[],!1,null,null,null);e.default=n.exports}}]);