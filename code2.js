gdjs.Level_32SelectCode = {};
gdjs.Level_32SelectCode.localVariables = [];
gdjs.Level_32SelectCode.idToCallbackMap = new Map();
gdjs.Level_32SelectCode.GDLevelLocked1Objects1_1final = [];

gdjs.Level_32SelectCode.GDLevelLocked2Objects1_1final = [];

gdjs.Level_32SelectCode.GDLevelSelector1Objects1= [];
gdjs.Level_32SelectCode.GDLevelSelector1Objects2= [];
gdjs.Level_32SelectCode.GDLevelSelector2Objects1= [];
gdjs.Level_32SelectCode.GDLevelSelector2Objects2= [];
gdjs.Level_32SelectCode.GDLevelSelector3Objects1= [];
gdjs.Level_32SelectCode.GDLevelSelector3Objects2= [];
gdjs.Level_32SelectCode.GDButtonEffectBackObjects1= [];
gdjs.Level_32SelectCode.GDButtonEffectBackObjects2= [];
gdjs.Level_32SelectCode.GDLevelLocked1Objects1= [];
gdjs.Level_32SelectCode.GDLevelLocked1Objects2= [];
gdjs.Level_32SelectCode.GDLevelLocked2Objects1= [];
gdjs.Level_32SelectCode.GDLevelLocked2Objects2= [];
gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1= [];
gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects2= [];
gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1= [];
gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects2= [];
gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1= [];
gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects2= [];
gdjs.Level_32SelectCode.GDButtonBackObjects1= [];
gdjs.Level_32SelectCode.GDButtonBackObjects2= [];
gdjs.Level_32SelectCode.GDButtonLevel1Objects1= [];
gdjs.Level_32SelectCode.GDButtonLevel1Objects2= [];
gdjs.Level_32SelectCode.GDButtonLevel2Objects1= [];
gdjs.Level_32SelectCode.GDButtonLevel2Objects2= [];
gdjs.Level_32SelectCode.GDButtonLevel3Objects1= [];
gdjs.Level_32SelectCode.GDButtonLevel3Objects2= [];
gdjs.Level_32SelectCode.GDButtonOKObjects1= [];
gdjs.Level_32SelectCode.GDButtonOKObjects2= [];


gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectBackObjects1Objects = Hashtable.newFrom({"ButtonEffectBack": gdjs.Level_32SelectCode.GDButtonEffectBackObjects1});
gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectLevel1Objects1Objects = Hashtable.newFrom({"ButtonEffectLevel1": gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1});
gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectLevel2Objects1Objects = Hashtable.newFrom({"ButtonEffectLevel2": gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1});
gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectLevel3Objects1Objects = Hashtable.newFrom({"ButtonEffectLevel3": gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1});
gdjs.Level_32SelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonOK"), gdjs.Level_32SelectCode.GDButtonOKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonOKObjects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonOKObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonOKObjects1[k] = gdjs.Level_32SelectCode.GDButtonOKObjects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonOKObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDLevelLocked1Objects1 */
/* Reuse gdjs.Level_32SelectCode.GDLevelLocked2Objects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].hide();
}
}
}

}


};gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonLevel1Objects1Objects = Hashtable.newFrom({"ButtonLevel1": gdjs.Level_32SelectCode.GDButtonLevel1Objects1});
gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonLevel2Objects1Objects = Hashtable.newFrom({"ButtonLevel2": gdjs.Level_32SelectCode.GDButtonLevel2Objects1});
gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonLevel3Objects1Objects = Hashtable.newFrom({"ButtonLevel3": gdjs.Level_32SelectCode.GDButtonLevel3Objects1});
gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonBackObjects1Objects = Hashtable.newFrom({"ButtonBack": gdjs.Level_32SelectCode.GDButtonBackObjects1});
gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonOKObjects1Objects = Hashtable.newFrom({"ButtonOK": gdjs.Level_32SelectCode.GDButtonOKObjects1});
gdjs.Level_32SelectCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Level_32SelectCode.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.Level_32SelectCode.GDButtonEffectBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel1"), gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel2"), gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel3"), gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonLevel1"), gdjs.Level_32SelectCode.GDButtonLevel1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonLevel2"), gdjs.Level_32SelectCode.GDButtonLevel2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonLevel3"), gdjs.Level_32SelectCode.GDButtonLevel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonOK"), gdjs.Level_32SelectCode.GDButtonOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector1"), gdjs.Level_32SelectCode.GDLevelSelector1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector2"), gdjs.Level_32SelectCode.GDLevelSelector2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector3"), gdjs.Level_32SelectCode.GDLevelSelector3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonBackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonOKObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonOKObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonBackObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel1Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonOKObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonOKObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectBackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectBackObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector1Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector2Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector3Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectBackObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonBackObjects1[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel1Objects1[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].setZOrder(40);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].setZOrder(40);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonOKObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonOKObjects1[i].setZOrder(50);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelector1"), gdjs.Level_32SelectCode.GDLevelSelector1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector2"), gdjs.Level_32SelectCode.GDLevelSelector2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector3"), gdjs.Level_32SelectCode.GDLevelSelector3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector3Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelector1"), gdjs.Level_32SelectCode.GDLevelSelector1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector2"), gdjs.Level_32SelectCode.GDLevelSelector2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector3"), gdjs.Level_32SelectCode.GDLevelSelector3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector3Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelector1"), gdjs.Level_32SelectCode.GDLevelSelector1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector2"), gdjs.Level_32SelectCode.GDLevelSelector2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelector3"), gdjs.Level_32SelectCode.GDLevelSelector3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelSelector3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelSelector3Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.Level_32SelectCode.GDButtonEffectBackObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDButtonEffectBackObjects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectBackObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectBack"), gdjs.Level_32SelectCode.GDButtonEffectBackObjects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectBackObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectBackObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel1"), gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectLevel1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel1"), gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel2"), gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectLevel2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel2"), gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel3"), gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonEffectLevel3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectLevel3"), gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Level_32SelectCode.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonBackObjects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonBackObjects1[k] = gdjs.Level_32SelectCode.GDButtonBackObjects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonBackObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel1"), gdjs.Level_32SelectCode.GDButtonLevel1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel1Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel1Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel2"), gdjs.Level_32SelectCode.GDButtonLevel2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel2Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel2"), gdjs.Level_32SelectCode.GDButtonLevel2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel2Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDLevelLocked1Objects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel3"), gdjs.Level_32SelectCode.GDButtonLevel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel3Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel3"), gdjs.Level_32SelectCode.GDButtonLevel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel3Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDLevelLocked1Objects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel3"), gdjs.Level_32SelectCode.GDButtonLevel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length;i<l;++i) {
    if ( !(gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects1[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel3Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32SelectCode.GDLevelLocked2Objects1 */
{for(var i = 0, len = gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDLevelLocked2Objects1[i].hide(false);
}
}
}

}


{

gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = 0;

gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_32SelectCode.GDLevelLocked1Objects1_1final.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LevelLocked1"), gdjs.Level_32SelectCode.GDLevelLocked1Objects2);
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked1Objects2.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDLevelLocked1Objects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Level_32SelectCode.GDLevelLocked1Objects2[k] = gdjs.Level_32SelectCode.GDLevelLocked1Objects2[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_32SelectCode.GDLevelLocked1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_32SelectCode.GDLevelLocked1Objects1_1final.indexOf(gdjs.Level_32SelectCode.GDLevelLocked1Objects2[j]) === -1 )
            gdjs.Level_32SelectCode.GDLevelLocked1Objects1_1final.push(gdjs.Level_32SelectCode.GDLevelLocked1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LevelLocked2"), gdjs.Level_32SelectCode.GDLevelLocked2Objects2);
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDLevelLocked2Objects2.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDLevelLocked2Objects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Level_32SelectCode.GDLevelLocked2Objects2[k] = gdjs.Level_32SelectCode.GDLevelLocked2Objects2[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDLevelLocked2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_32SelectCode.GDLevelLocked2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_32SelectCode.GDLevelLocked2Objects1_1final.indexOf(gdjs.Level_32SelectCode.GDLevelLocked2Objects2[j]) === -1 )
            gdjs.Level_32SelectCode.GDLevelLocked2Objects1_1final.push(gdjs.Level_32SelectCode.GDLevelLocked2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_32SelectCode.GDLevelLocked1Objects1_1final, gdjs.Level_32SelectCode.GDLevelLocked1Objects1);
gdjs.copyArray(gdjs.Level_32SelectCode.GDLevelLocked2Objects1_1final, gdjs.Level_32SelectCode.GDLevelLocked2Objects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_32SelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel1"), gdjs.Level_32SelectCode.GDButtonLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel1Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel1Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel1Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel2"), gdjs.Level_32SelectCode.GDButtonLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel2Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel2Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel3"), gdjs.Level_32SelectCode.GDButtonLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonLevel3Objects1[k] = gdjs.Level_32SelectCode.GDButtonLevel3Objects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Level_32SelectCode.GDButtonBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonBackObjects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonBackObjects1[k] = gdjs.Level_32SelectCode.GDButtonBackObjects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonOK"), gdjs.Level_32SelectCode.GDButtonOKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32SelectCode.GDButtonOKObjects1.length;i<l;++i) {
    if ( gdjs.Level_32SelectCode.GDButtonOKObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32SelectCode.GDButtonOKObjects1[k] = gdjs.Level_32SelectCode.GDButtonOKObjects1[i];
        ++k;
    }
}
gdjs.Level_32SelectCode.GDButtonOKObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel1"), gdjs.Level_32SelectCode.GDButtonLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonLevel1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17149540);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel2"), gdjs.Level_32SelectCode.GDButtonLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonLevel2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17150204);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel3"), gdjs.Level_32SelectCode.GDButtonLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonLevel3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16757172);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Level_32SelectCode.GDButtonBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16757780);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonOK"), gdjs.Level_32SelectCode.GDButtonOKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_9546Level_959532SelectCode_9546GDButtonOKObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17155004);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}

}

};

gdjs.Level_32SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32SelectCode.GDLevelSelector1Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector1Objects2.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector2Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector2Objects2.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector3Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector3Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectBackObjects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectBackObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked1Objects2.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked2Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonBackObjects1.length = 0;
gdjs.Level_32SelectCode.GDButtonBackObjects2.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel1Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel2Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel3Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonOKObjects1.length = 0;
gdjs.Level_32SelectCode.GDButtonOKObjects2.length = 0;

gdjs.Level_32SelectCode.eventsList1(runtimeScene);
gdjs.Level_32SelectCode.GDLevelSelector1Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector1Objects2.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector2Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector2Objects2.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector3Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelSelector3Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectBackObjects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectBackObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked1Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked1Objects2.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked2Objects1.length = 0;
gdjs.Level_32SelectCode.GDLevelLocked2Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel1Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel2Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonEffectLevel3Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonBackObjects1.length = 0;
gdjs.Level_32SelectCode.GDButtonBackObjects2.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel1Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel1Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel2Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel2Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel3Objects1.length = 0;
gdjs.Level_32SelectCode.GDButtonLevel3Objects2.length = 0;
gdjs.Level_32SelectCode.GDButtonOKObjects1.length = 0;
gdjs.Level_32SelectCode.GDButtonOKObjects2.length = 0;


return;

}

gdjs['Level_32SelectCode'] = gdjs.Level_32SelectCode;
