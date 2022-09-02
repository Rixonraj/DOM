function label(tagname,attName,attValue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attName,attValue);
    ele.innerHTML=content;
    return ele;
}

function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    return ele1;
    
    }
var br1=document.createElement("br");

var l1= label("label","for","firstName","First Name");
var I1= inputelement("input","id","firstName","type","text")
var l2= label("label","for","middleName","Middle Name");
var I2= inputelement("input","id","middleName","type","text")
var l3= label("label","for","lastName","Last Name");
var I3= inputelement("input","id","lastName","type","text")
var l4= label("label","for","email","Email");
var I4= inputelement("input","id","email","type","email")
var l5= label("label","for","contact","Contact");
var I5= inputelement("input","id","contact","type","number")

document.body.append(l1,I1,br1,l2,I2,br1,l3,I3,br1,l4,I4,br1,l5,I5,br1)
