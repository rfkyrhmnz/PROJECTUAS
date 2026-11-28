gdjs.OutroCode = {};
gdjs.OutroCode.localVariables = [];
gdjs.OutroCode.idToCallbackMap = new Map();
gdjs.OutroCode.GDoutroObjects1= [];
gdjs.OutroCode.GDoutroObjects2= [];


gdjs.OutroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("outro"), gdjs.OutroCode.GDoutroObjects1);
{for(var i = 0, len = gdjs.OutroCode.GDoutroObjects1.length ;i < len;++i) {
    gdjs.OutroCode.GDoutroObjects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("outro"), gdjs.OutroCode.GDoutroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OutroCode.GDoutroObjects1.length;i<l;++i) {
    if ( gdjs.OutroCode.GDoutroObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.OutroCode.GDoutroObjects1[k] = gdjs.OutroCode.GDoutroObjects1[i];
        ++k;
    }
}
gdjs.OutroCode.GDoutroObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "outro_fallback");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("outro"), gdjs.OutroCode.GDoutroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.OutroCode.GDoutroObjects1.length === 0 ) ? 0 :gdjs.OutroCode.GDoutroObjects1[0].getDuration()) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.OutroCode.GDoutroObjects1.length === 0 ) ? 0 :gdjs.OutroCode.GDoutroObjects1[0].getCurrentTime()) >= (( gdjs.OutroCode.GDoutroObjects1.length === 0 ) ? 0 :gdjs.OutroCode.GDoutroObjects1[0].getDuration()) - 0.3);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("outro"), gdjs.OutroCode.GDoutroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.OutroCode.GDoutroObjects1.length === 0 ) ? 0 :gdjs.OutroCode.GDoutroObjects1[0].getDuration()) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "outro_fallback") > (( gdjs.OutroCode.GDoutroObjects1.length === 0 ) ? 0 :gdjs.OutroCode.GDoutroObjects1[0].getDuration()) + 5;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


};

gdjs.OutroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OutroCode.GDoutroObjects1.length = 0;
gdjs.OutroCode.GDoutroObjects2.length = 0;

gdjs.OutroCode.eventsList0(runtimeScene);
gdjs.OutroCode.GDoutroObjects1.length = 0;
gdjs.OutroCode.GDoutroObjects2.length = 0;


return;

}

gdjs['OutroCode'] = gdjs.OutroCode;
