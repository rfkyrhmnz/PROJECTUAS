gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDLobbyObjects1= [];
gdjs.IntroCode.GDLobbyObjects2= [];
gdjs.IntroCode.GDStartGameObjects1= [];
gdjs.IntroCode.GDStartGameObjects2= [];
gdjs.IntroCode.GDLevelSelectObjects1= [];
gdjs.IntroCode.GDLevelSelectObjects2= [];
gdjs.IntroCode.GDAboutObjects1= [];
gdjs.IntroCode.GDAboutObjects2= [];
gdjs.IntroCode.GDQuitObjects1= [];
gdjs.IntroCode.GDQuitObjects2= [];
gdjs.IntroCode.GDEffectButtonStartObjects1= [];
gdjs.IntroCode.GDEffectButtonStartObjects2= [];
gdjs.IntroCode.GDEffectButtonLevelObjects1= [];
gdjs.IntroCode.GDEffectButtonLevelObjects2= [];
gdjs.IntroCode.GDEffectButtonAboutObjects1= [];
gdjs.IntroCode.GDEffectButtonAboutObjects2= [];
gdjs.IntroCode.GDEffectButtonQuitObjects1= [];
gdjs.IntroCode.GDEffectButtonQuitObjects2= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonStartObjects1Objects = Hashtable.newFrom({"EffectButtonStart": gdjs.IntroCode.GDEffectButtonStartObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonLevelObjects1Objects = Hashtable.newFrom({"EffectButtonLevel": gdjs.IntroCode.GDEffectButtonLevelObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonAboutObjects1Objects = Hashtable.newFrom({"EffectButtonAbout": gdjs.IntroCode.GDEffectButtonAboutObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonQuitObjects1Objects = Hashtable.newFrom({"EffectButtonQuit": gdjs.IntroCode.GDEffectButtonQuitObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDStartGameObjects1Objects = Hashtable.newFrom({"StartGame": gdjs.IntroCode.GDStartGameObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDLevelSelectObjects1Objects = Hashtable.newFrom({"LevelSelect": gdjs.IntroCode.GDLevelSelectObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDAboutObjects1Objects = Hashtable.newFrom({"About": gdjs.IntroCode.GDAboutObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.IntroCode.GDQuitObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.IntroCode.GDStartGameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDStartGameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDStartGameObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDStartGameObjects1[k] = gdjs.IntroCode.GDStartGameObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDStartGameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.IntroCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDLevelSelectObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDLevelSelectObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDLevelSelectObjects1[k] = gdjs.IntroCode.GDLevelSelectObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDLevelSelectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("About"), gdjs.IntroCode.GDAboutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDAboutObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDAboutObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDAboutObjects1[k] = gdjs.IntroCode.GDAboutObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDAboutObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.IntroCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDQuitObjects1[k] = gdjs.IntroCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("About"), gdjs.IntroCode.GDAboutObjects1);
gdjs.copyArray(runtimeScene.getObjects("EffectButtonAbout"), gdjs.IntroCode.GDEffectButtonAboutObjects1);
gdjs.copyArray(runtimeScene.getObjects("EffectButtonLevel"), gdjs.IntroCode.GDEffectButtonLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("EffectButtonQuit"), gdjs.IntroCode.GDEffectButtonQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("EffectButtonStart"), gdjs.IntroCode.GDEffectButtonStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.IntroCode.GDLevelSelectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lobby"), gdjs.IntroCode.GDLobbyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.IntroCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.IntroCode.GDStartGameObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonStartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonStartObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonLevelObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonLevelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonAboutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonAboutObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonQuitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonQuitObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonStartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonStartObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonLevelObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonLevelObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonAboutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonAboutObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonQuitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonQuitObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDLobbyObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLobbyObjects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDStartGameObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDStartGameObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDLevelSelectObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLevelSelectObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDAboutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDAboutObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDQuitObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonStartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonStartObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonLevelObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonLevelObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonAboutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonAboutObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonQuitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonQuitObjects1[i].setZOrder(20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EffectButtonStart"), gdjs.IntroCode.GDEffectButtonStartObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDEffectButtonStartObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonStartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonStartObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("EffectButtonStart"), gdjs.IntroCode.GDEffectButtonStartObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonStartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonStartObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EffectButtonLevel"), gdjs.IntroCode.GDEffectButtonLevelObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonLevelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDEffectButtonLevelObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonLevelObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonLevelObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("EffectButtonLevel"), gdjs.IntroCode.GDEffectButtonLevelObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonLevelObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonLevelObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EffectButtonAbout"), gdjs.IntroCode.GDEffectButtonAboutObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonAboutObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDEffectButtonAboutObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonAboutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonAboutObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("EffectButtonAbout"), gdjs.IntroCode.GDEffectButtonAboutObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonAboutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonAboutObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EffectButtonQuit"), gdjs.IntroCode.GDEffectButtonQuitObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDEffectButtonQuitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDEffectButtonQuitObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonQuitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonQuitObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("EffectButtonQuit"), gdjs.IntroCode.GDEffectButtonQuitObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDEffectButtonQuitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEffectButtonQuitObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.IntroCode.GDStartGameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDStartGameObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16990644);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.IntroCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDLevelSelectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16991988);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("About"), gdjs.IntroCode.GDAboutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDAboutObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16992652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.IntroCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDQuitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16993268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Theme 2.aac", true, 60, 1);
}
}

}

}

};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDLobbyObjects1.length = 0;
gdjs.IntroCode.GDLobbyObjects2.length = 0;
gdjs.IntroCode.GDStartGameObjects1.length = 0;
gdjs.IntroCode.GDStartGameObjects2.length = 0;
gdjs.IntroCode.GDLevelSelectObjects1.length = 0;
gdjs.IntroCode.GDLevelSelectObjects2.length = 0;
gdjs.IntroCode.GDAboutObjects1.length = 0;
gdjs.IntroCode.GDAboutObjects2.length = 0;
gdjs.IntroCode.GDQuitObjects1.length = 0;
gdjs.IntroCode.GDQuitObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonStartObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonStartObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonLevelObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonLevelObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonAboutObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonAboutObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonQuitObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonQuitObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
gdjs.IntroCode.GDLobbyObjects1.length = 0;
gdjs.IntroCode.GDLobbyObjects2.length = 0;
gdjs.IntroCode.GDStartGameObjects1.length = 0;
gdjs.IntroCode.GDStartGameObjects2.length = 0;
gdjs.IntroCode.GDLevelSelectObjects1.length = 0;
gdjs.IntroCode.GDLevelSelectObjects2.length = 0;
gdjs.IntroCode.GDAboutObjects1.length = 0;
gdjs.IntroCode.GDAboutObjects2.length = 0;
gdjs.IntroCode.GDQuitObjects1.length = 0;
gdjs.IntroCode.GDQuitObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonStartObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonStartObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonLevelObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonLevelObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonAboutObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonAboutObjects2.length = 0;
gdjs.IntroCode.GDEffectButtonQuitObjects1.length = 0;
gdjs.IntroCode.GDEffectButtonQuitObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
