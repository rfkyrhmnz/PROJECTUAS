gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.idToCallbackMap = new Map();
gdjs.ShopCode.GDShop3Objects1_1final = [];

gdjs.ShopCode.GDShop4Objects1_1final = [];

gdjs.ShopCode.GDShopObjects1= [];
gdjs.ShopCode.GDShopObjects2= [];
gdjs.ShopCode.GDShopObjects3= [];
gdjs.ShopCode.GDShopObjects4= [];
gdjs.ShopCode.GDShop2Objects1= [];
gdjs.ShopCode.GDShop2Objects2= [];
gdjs.ShopCode.GDShop2Objects3= [];
gdjs.ShopCode.GDShop2Objects4= [];
gdjs.ShopCode.GDShop3Objects1= [];
gdjs.ShopCode.GDShop3Objects2= [];
gdjs.ShopCode.GDShop3Objects3= [];
gdjs.ShopCode.GDShop3Objects4= [];
gdjs.ShopCode.GDShop4Objects1= [];
gdjs.ShopCode.GDShop4Objects2= [];
gdjs.ShopCode.GDShop4Objects3= [];
gdjs.ShopCode.GDShop4Objects4= [];
gdjs.ShopCode.GDButtonShop_9595KiriObjects1= [];
gdjs.ShopCode.GDButtonShop_9595KiriObjects2= [];
gdjs.ShopCode.GDButtonShop_9595KiriObjects3= [];
gdjs.ShopCode.GDButtonShop_9595KiriObjects4= [];
gdjs.ShopCode.GDButtonShop_9595KananObjects1= [];
gdjs.ShopCode.GDButtonShop_9595KananObjects2= [];
gdjs.ShopCode.GDButtonShop_9595KananObjects3= [];
gdjs.ShopCode.GDButtonShop_9595KananObjects4= [];
gdjs.ShopCode.GDButtonBackObjects1= [];
gdjs.ShopCode.GDButtonBackObjects2= [];
gdjs.ShopCode.GDButtonBackObjects3= [];
gdjs.ShopCode.GDButtonBackObjects4= [];
gdjs.ShopCode.GDButtonShop2KiriObjects1= [];
gdjs.ShopCode.GDButtonShop2KiriObjects2= [];
gdjs.ShopCode.GDButtonShop2KiriObjects3= [];
gdjs.ShopCode.GDButtonShop2KiriObjects4= [];
gdjs.ShopCode.GDButtonShop2KananObjects1= [];
gdjs.ShopCode.GDButtonShop2KananObjects2= [];
gdjs.ShopCode.GDButtonShop2KananObjects3= [];
gdjs.ShopCode.GDButtonShop2KananObjects4= [];
gdjs.ShopCode.GDShopCoinTextObjects1= [];
gdjs.ShopCode.GDShopCoinTextObjects2= [];
gdjs.ShopCode.GDShopCoinTextObjects3= [];
gdjs.ShopCode.GDShopCoinTextObjects4= [];
gdjs.ShopCode.GDButtonEffectLeftObjects1= [];
gdjs.ShopCode.GDButtonEffectLeftObjects2= [];
gdjs.ShopCode.GDButtonEffectLeftObjects3= [];
gdjs.ShopCode.GDButtonEffectLeftObjects4= [];
gdjs.ShopCode.GDButtonEffectLeft2Objects1= [];
gdjs.ShopCode.GDButtonEffectLeft2Objects2= [];
gdjs.ShopCode.GDButtonEffectLeft2Objects3= [];
gdjs.ShopCode.GDButtonEffectLeft2Objects4= [];
gdjs.ShopCode.GDButtonEffectRightObjects1= [];
gdjs.ShopCode.GDButtonEffectRightObjects2= [];
gdjs.ShopCode.GDButtonEffectRightObjects3= [];
gdjs.ShopCode.GDButtonEffectRightObjects4= [];
gdjs.ShopCode.GDButtonEffectRight2Objects1= [];
gdjs.ShopCode.GDButtonEffectRight2Objects2= [];
gdjs.ShopCode.GDButtonEffectRight2Objects3= [];
gdjs.ShopCode.GDButtonEffectRight2Objects4= [];
gdjs.ShopCode.GDButtonEffectBackObjects1= [];
gdjs.ShopCode.GDButtonEffectBackObjects2= [];
gdjs.ShopCode.GDButtonEffectBackObjects3= [];
gdjs.ShopCode.GDButtonEffectBackObjects4= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() >= 15);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects3);
gdjs.copyArray(gdjs.ShopCode.GDButtonShop2KiriObjects1, gdjs.ShopCode.GDButtonShop2KiriObjects3);

gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Shop3"), gdjs.ShopCode.GDShop3Objects3);
gdjs.copyArray(runtimeScene.getObjects("ShopCoinText"), gdjs.ShopCode.GDShopCoinTextObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(8).sub(15);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(Math.min(150, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() + 50));
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(Math.ceil(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 50));
}
{for(var i = 0, len = gdjs.ShopCode.GDShopCoinTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShopCoinTextObjects3[i].getBehavior("Text").setText("Coin: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects3[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop3Objects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShop3Objects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects3[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "result");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects2);
gdjs.copyArray(gdjs.ShopCode.GDButtonShop2KiriObjects1, gdjs.ShopCode.GDButtonShop2KiriObjects2);

gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shop4"), gdjs.ShopCode.GDShop4Objects2);
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop4Objects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShop4Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "result");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.ShopCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() >= 20);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects2);
gdjs.copyArray(gdjs.ShopCode.GDButtonShop2KiriObjects1, gdjs.ShopCode.GDButtonShop2KiriObjects2);

gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shop3"), gdjs.ShopCode.GDShop3Objects2);
gdjs.copyArray(runtimeScene.getObjects("ShopCoinText"), gdjs.ShopCode.GDShopCoinTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(8).sub(20);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(10);
}
{for(var i = 0, len = gdjs.ShopCode.GDShopCoinTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopCoinTextObjects2[i].getBehavior("Text").setText("Coin: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop3Objects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShop3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "result");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects1);
/* Reuse gdjs.ShopCode.GDButtonShop2KiriObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shop4"), gdjs.ShopCode.GDShop4Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop4Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "result");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "lives");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "ammo");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectLeftObjects1Objects = Hashtable.newFrom({"ButtonEffectLeft": gdjs.ShopCode.GDButtonEffectLeftObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectRightObjects1Objects = Hashtable.newFrom({"ButtonEffectRight": gdjs.ShopCode.GDButtonEffectRightObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectBackObjects1Objects = Hashtable.newFrom({"ButtonEffectBack": gdjs.ShopCode.GDButtonEffectBackObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectLeft2Objects1Objects = Hashtable.newFrom({"ButtonEffectLeft2": gdjs.ShopCode.GDButtonEffectLeft2Objects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectRight2Objects1Objects = Hashtable.newFrom({"ButtonEffectRight2": gdjs.ShopCode.GDButtonEffectRight2Objects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonShop_95959595KiriObjects1Objects = Hashtable.newFrom({"ButtonShop_Kiri": gdjs.ShopCode.GDButtonShop_9595KiriObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonShop_95959595KananObjects1Objects = Hashtable.newFrom({"ButtonShop_Kanan": gdjs.ShopCode.GDButtonShop_9595KananObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonBackObjects1Objects = Hashtable.newFrom({"ButtonBack": gdjs.ShopCode.GDButtonBackObjects1});
gdjs.ShopCode.eventsList3 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.ShopCode.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.ShopCode.GDButtonEffectBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft"), gdjs.ShopCode.GDButtonEffectLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft2"), gdjs.ShopCode.GDButtonEffectLeft2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight"), gdjs.ShopCode.GDButtonEffectRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight2"), gdjs.ShopCode.GDButtonEffectRight2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kiri"), gdjs.ShopCode.GDButtonShop2KiriObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kanan"), gdjs.ShopCode.GDButtonShop_9595KananObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kiri"), gdjs.ShopCode.GDButtonShop_9595KiriObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.ShopCode.GDShopObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shop3"), gdjs.ShopCode.GDShop3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shop4"), gdjs.ShopCode.GDShop4Objects1);
gdjs.copyArray(runtimeScene.getObjects("ShopCoinText"), gdjs.ShopCode.GDShopCoinTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buydelay");
}
{for(var i = 0, len = gdjs.ShopCode.GDShopObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop3Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop4Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KananObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonBackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShopCoinTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopCoinTextObjects1[i].getBehavior("Text").setText("Coin: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].setZOrder(20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kiri"), gdjs.ShopCode.GDButtonShop_9595KiriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop_9595KiriObjects1[k] = gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop_9595KiriObjects1[k] = gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.ShopCode.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.ShopCode.GDButtonEffectBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft"), gdjs.ShopCode.GDButtonEffectLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft2"), gdjs.ShopCode.GDButtonEffectLeft2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight"), gdjs.ShopCode.GDButtonEffectRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight2"), gdjs.ShopCode.GDButtonEffectRight2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kiri"), gdjs.ShopCode.GDButtonShop2KiriObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kanan"), gdjs.ShopCode.GDButtonShop_9595KananObjects1);
/* Reuse gdjs.ShopCode.GDButtonShop_9595KiriObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.ShopCode.GDShopObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("lives");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buydelay");
}
{for(var i = 0, len = gdjs.ShopCode.GDShopObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KananObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonBackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kanan"), gdjs.ShopCode.GDButtonShop_9595KananObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop_9595KananObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop_9595KananObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop_9595KananObjects1[k] = gdjs.ShopCode.GDButtonShop_9595KananObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop_9595KananObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop_9595KananObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop_9595KananObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop_9595KananObjects1[k] = gdjs.ShopCode.GDButtonShop_9595KananObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop_9595KananObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.ShopCode.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.ShopCode.GDButtonEffectBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft"), gdjs.ShopCode.GDButtonEffectLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft2"), gdjs.ShopCode.GDButtonEffectLeft2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight"), gdjs.ShopCode.GDButtonEffectRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight2"), gdjs.ShopCode.GDButtonEffectRight2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kiri"), gdjs.ShopCode.GDButtonShop2KiriObjects1);
/* Reuse gdjs.ShopCode.GDButtonShop_9595KananObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kiri"), gdjs.ShopCode.GDButtonShop_9595KiriObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.ShopCode.GDShopObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("ammo");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buydelay");
}
{for(var i = 0, len = gdjs.ShopCode.GDShopObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KananObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonBackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.ShopCode.GDButtonBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonBackObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonBackObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonBackObjects1[k] = gdjs.ShopCode.GDButtonBackObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonBackObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonBackObjects1[k] = gdjs.ShopCode.GDButtonBackObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonBackObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kiri"), gdjs.ShopCode.GDButtonShop2KiriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop2KiriObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop2KiriObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop2KiriObjects1[k] = gdjs.ShopCode.GDButtonShop2KiriObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop2KiriObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buydelay") > 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop2KiriObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop2KiriObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop2KiriObjects1[k] = gdjs.ShopCode.GDButtonShop2KiriObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop2KiriObjects1.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop2KananObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop2KananObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop2KananObjects1[k] = gdjs.ShopCode.GDButtonShop2KananObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop2KananObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buydelay") > 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop2KananObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop2KananObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop2KananObjects1[k] = gdjs.ShopCode.GDButtonShop2KananObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop2KananObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.ShopCode.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.ShopCode.GDButtonEffectBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft"), gdjs.ShopCode.GDButtonEffectLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft2"), gdjs.ShopCode.GDButtonEffectLeft2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight"), gdjs.ShopCode.GDButtonEffectRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight2"), gdjs.ShopCode.GDButtonEffectRight2Objects1);
/* Reuse gdjs.ShopCode.GDButtonShop2KananObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kiri"), gdjs.ShopCode.GDButtonShop2KiriObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kanan"), gdjs.ShopCode.GDButtonShop_9595KananObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kiri"), gdjs.ShopCode.GDButtonShop_9595KiriObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.ShopCode.GDShopObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.ShopCode.GDShop2Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDShop2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShop2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KiriObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop2KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop2KananObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonShop_9595KananObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonShop_9595KananObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonBackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].setOpacity(0);
}
}
}

}


{

gdjs.ShopCode.GDShop3Objects1.length = 0;

gdjs.ShopCode.GDShop4Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "result") > 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.ShopCode.GDShop3Objects1_1final.length = 0;
gdjs.ShopCode.GDShop4Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Shop3"), gdjs.ShopCode.GDShop3Objects2);
for (var i = 0, k = 0, l = gdjs.ShopCode.GDShop3Objects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShop3Objects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.ShopCode.GDShop3Objects2[k] = gdjs.ShopCode.GDShop3Objects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDShop3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.ShopCode.GDShop3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.ShopCode.GDShop3Objects1_1final.indexOf(gdjs.ShopCode.GDShop3Objects2[j]) === -1 )
            gdjs.ShopCode.GDShop3Objects1_1final.push(gdjs.ShopCode.GDShop3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Shop4"), gdjs.ShopCode.GDShop4Objects2);
for (var i = 0, k = 0, l = gdjs.ShopCode.GDShop4Objects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShop4Objects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.ShopCode.GDShop4Objects2[k] = gdjs.ShopCode.GDShop4Objects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDShop4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.ShopCode.GDShop4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.ShopCode.GDShop4Objects1_1final.indexOf(gdjs.ShopCode.GDShop4Objects2[j]) === -1 )
            gdjs.ShopCode.GDShop4Objects1_1final.push(gdjs.ShopCode.GDShop4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ShopCode.GDShop3Objects1_1final, gdjs.ShopCode.GDShop3Objects1);
gdjs.copyArray(gdjs.ShopCode.GDShop4Objects1_1final, gdjs.ShopCode.GDShop4Objects1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft"), gdjs.ShopCode.GDButtonEffectLeftObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonEffectLeftObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonEffectLeftObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonEffectLeftObjects1[k] = gdjs.ShopCode.GDButtonEffectLeftObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonEffectLeftObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectLeftObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDButtonEffectLeftObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft"), gdjs.ShopCode.GDButtonEffectLeftObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight"), gdjs.ShopCode.GDButtonEffectRightObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonEffectRightObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonEffectRightObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonEffectRightObjects1[k] = gdjs.ShopCode.GDButtonEffectRightObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonEffectRightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectRightObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDButtonEffectRightObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight"), gdjs.ShopCode.GDButtonEffectRightObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.ShopCode.GDButtonEffectBackObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonEffectBackObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonEffectBackObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonEffectBackObjects1[k] = gdjs.ShopCode.GDButtonEffectBackObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonEffectBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectBackObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDButtonEffectBackObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.ShopCode.GDButtonEffectBackObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft2"), gdjs.ShopCode.GDButtonEffectLeft2Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonEffectLeft2Objects1[k] = gdjs.ShopCode.GDButtonEffectLeft2Objects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonEffectLeft2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectLeft2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDButtonEffectLeft2Objects1 */
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft2"), gdjs.ShopCode.GDButtonEffectLeft2Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight2"), gdjs.ShopCode.GDButtonEffectRight2Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonEffectRight2Objects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonEffectRight2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonEffectRight2Objects1[k] = gdjs.ShopCode.GDButtonEffectRight2Objects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonEffectRight2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonEffectRight2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDButtonEffectRight2Objects1 */
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight2"), gdjs.ShopCode.GDButtonEffectRight2Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.ShopCode.GDShop3Objects1.length = 0;

gdjs.ShopCode.GDShop4Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.ShopCode.GDShop3Objects1_1final.length = 0;
gdjs.ShopCode.GDShop4Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Shop3"), gdjs.ShopCode.GDShop3Objects2);
for (var i = 0, k = 0, l = gdjs.ShopCode.GDShop3Objects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShop3Objects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.ShopCode.GDShop3Objects2[k] = gdjs.ShopCode.GDShop3Objects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDShop3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.ShopCode.GDShop3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.ShopCode.GDShop3Objects1_1final.indexOf(gdjs.ShopCode.GDShop3Objects2[j]) === -1 )
            gdjs.ShopCode.GDShop3Objects1_1final.push(gdjs.ShopCode.GDShop3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Shop4"), gdjs.ShopCode.GDShop4Objects2);
for (var i = 0, k = 0, l = gdjs.ShopCode.GDShop4Objects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShop4Objects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.ShopCode.GDShop4Objects2[k] = gdjs.ShopCode.GDShop4Objects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDShop4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.ShopCode.GDShop4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.ShopCode.GDShop4Objects1_1final.indexOf(gdjs.ShopCode.GDShop4Objects2[j]) === -1 )
            gdjs.ShopCode.GDShop4Objects1_1final.push(gdjs.ShopCode.GDShop4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ShopCode.GDShop3Objects1_1final, gdjs.ShopCode.GDShop3Objects1);
gdjs.copyArray(gdjs.ShopCode.GDShop4Objects1_1final, gdjs.ShopCode.GDShop4Objects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.ShopCode.GDButtonEffectBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft"), gdjs.ShopCode.GDButtonEffectLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLeft2"), gdjs.ShopCode.GDButtonEffectLeft2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight"), gdjs.ShopCode.GDButtonEffectRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectRight2"), gdjs.ShopCode.GDButtonEffectRight2Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeftObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeftObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRightObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRightObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectBackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectLeft2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectLeft2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDButtonEffectRight2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDButtonEffectRight2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kiri"), gdjs.ShopCode.GDButtonShop_9595KiriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop_9595KiriObjects1[k] = gdjs.ShopCode.GDButtonShop_9595KiriObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kanan"), gdjs.ShopCode.GDButtonShop_9595KananObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop_9595KananObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop_9595KananObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop_9595KananObjects1[k] = gdjs.ShopCode.GDButtonShop_9595KananObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop_9595KananObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kiri"), gdjs.ShopCode.GDButtonShop2KiriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop2KiriObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop2KiriObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop2KiriObjects1[k] = gdjs.ShopCode.GDButtonShop2KiriObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop2KiriObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop2Kanan"), gdjs.ShopCode.GDButtonShop2KananObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonShop2KananObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonShop2KananObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonShop2KananObjects1[k] = gdjs.ShopCode.GDButtonShop2KananObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonShop2KananObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.ShopCode.GDButtonBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonBackObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonBackObjects1[k] = gdjs.ShopCode.GDButtonBackObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kiri"), gdjs.ShopCode.GDButtonShop_9595KiriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonShop_95959595KiriObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17715172);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShop_Kanan"), gdjs.ShopCode.GDButtonShop_9595KananObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonShop_95959595KananObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17715972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.ShopCode.GDButtonBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDButtonBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17716852);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}

}

};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDShopObjects1.length = 0;
gdjs.ShopCode.GDShopObjects2.length = 0;
gdjs.ShopCode.GDShopObjects3.length = 0;
gdjs.ShopCode.GDShopObjects4.length = 0;
gdjs.ShopCode.GDShop2Objects1.length = 0;
gdjs.ShopCode.GDShop2Objects2.length = 0;
gdjs.ShopCode.GDShop2Objects3.length = 0;
gdjs.ShopCode.GDShop2Objects4.length = 0;
gdjs.ShopCode.GDShop3Objects1.length = 0;
gdjs.ShopCode.GDShop3Objects2.length = 0;
gdjs.ShopCode.GDShop3Objects3.length = 0;
gdjs.ShopCode.GDShop3Objects4.length = 0;
gdjs.ShopCode.GDShop4Objects1.length = 0;
gdjs.ShopCode.GDShop4Objects2.length = 0;
gdjs.ShopCode.GDShop4Objects3.length = 0;
gdjs.ShopCode.GDShop4Objects4.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects2.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects3.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects4.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects1.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects2.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects3.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects4.length = 0;
gdjs.ShopCode.GDButtonBackObjects1.length = 0;
gdjs.ShopCode.GDButtonBackObjects2.length = 0;
gdjs.ShopCode.GDButtonBackObjects3.length = 0;
gdjs.ShopCode.GDButtonBackObjects4.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects1.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects2.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects3.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects4.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects1.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects2.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects3.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects4.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects1.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects2.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects3.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects4.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects1.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects2.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects3.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects4.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects1.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects2.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects3.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects4.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects1.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects2.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects3.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects4.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects1.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects2.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects3.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects4.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects1.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects2.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects3.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects4.length = 0;

gdjs.ShopCode.eventsList3(runtimeScene);
gdjs.ShopCode.GDShopObjects1.length = 0;
gdjs.ShopCode.GDShopObjects2.length = 0;
gdjs.ShopCode.GDShopObjects3.length = 0;
gdjs.ShopCode.GDShopObjects4.length = 0;
gdjs.ShopCode.GDShop2Objects1.length = 0;
gdjs.ShopCode.GDShop2Objects2.length = 0;
gdjs.ShopCode.GDShop2Objects3.length = 0;
gdjs.ShopCode.GDShop2Objects4.length = 0;
gdjs.ShopCode.GDShop3Objects1.length = 0;
gdjs.ShopCode.GDShop3Objects2.length = 0;
gdjs.ShopCode.GDShop3Objects3.length = 0;
gdjs.ShopCode.GDShop3Objects4.length = 0;
gdjs.ShopCode.GDShop4Objects1.length = 0;
gdjs.ShopCode.GDShop4Objects2.length = 0;
gdjs.ShopCode.GDShop4Objects3.length = 0;
gdjs.ShopCode.GDShop4Objects4.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects1.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects2.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects3.length = 0;
gdjs.ShopCode.GDButtonShop_9595KiriObjects4.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects1.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects2.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects3.length = 0;
gdjs.ShopCode.GDButtonShop_9595KananObjects4.length = 0;
gdjs.ShopCode.GDButtonBackObjects1.length = 0;
gdjs.ShopCode.GDButtonBackObjects2.length = 0;
gdjs.ShopCode.GDButtonBackObjects3.length = 0;
gdjs.ShopCode.GDButtonBackObjects4.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects1.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects2.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects3.length = 0;
gdjs.ShopCode.GDButtonShop2KiriObjects4.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects1.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects2.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects3.length = 0;
gdjs.ShopCode.GDButtonShop2KananObjects4.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects1.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects2.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects3.length = 0;
gdjs.ShopCode.GDShopCoinTextObjects4.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects1.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects2.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects3.length = 0;
gdjs.ShopCode.GDButtonEffectLeftObjects4.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects1.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects2.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects3.length = 0;
gdjs.ShopCode.GDButtonEffectLeft2Objects4.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects1.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects2.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects3.length = 0;
gdjs.ShopCode.GDButtonEffectRightObjects4.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects1.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects2.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects3.length = 0;
gdjs.ShopCode.GDButtonEffectRight2Objects4.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects1.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects2.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects3.length = 0;
gdjs.ShopCode.GDButtonEffectBackObjects4.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
