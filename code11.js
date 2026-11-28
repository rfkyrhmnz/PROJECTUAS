gdjs.LoserCode = {};
gdjs.LoserCode.localVariables = [];
gdjs.LoserCode.idToCallbackMap = new Map();
gdjs.LoserCode.GDNewVideoObjects1= [];
gdjs.LoserCode.GDNewVideoObjects2= [];


gdjs.LoserCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.LoserCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.LoserCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.LoserCode.GDNewVideoObjects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.LoserCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoserCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.LoserCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.LoserCode.GDNewVideoObjects1[k] = gdjs.LoserCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.LoserCode.GDNewVideoObjects1.length = k;
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
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loser_fallback");
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

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.LoserCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.LoserCode.GDNewVideoObjects1.length === 0 ) ? 0 :gdjs.LoserCode.GDNewVideoObjects1[0].getDuration()) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.LoserCode.GDNewVideoObjects1.length === 0 ) ? 0 :gdjs.LoserCode.GDNewVideoObjects1[0].getCurrentTime()) >= (( gdjs.LoserCode.GDNewVideoObjects1.length === 0 ) ? 0 :gdjs.LoserCode.GDNewVideoObjects1[0].getDuration()) - 0.3);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.LoserCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.LoserCode.GDNewVideoObjects1.length === 0 ) ? 0 :gdjs.LoserCode.GDNewVideoObjects1[0].getDuration()) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loser_fallback") > (( gdjs.LoserCode.GDNewVideoObjects1.length === 0 ) ? 0 :gdjs.LoserCode.GDNewVideoObjects1[0].getDuration()) + 5;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


};

gdjs.LoserCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoserCode.GDNewVideoObjects1.length = 0;
gdjs.LoserCode.GDNewVideoObjects2.length = 0;

gdjs.LoserCode.eventsList0(runtimeScene);
gdjs.LoserCode.GDNewVideoObjects1.length = 0;
gdjs.LoserCode.GDNewVideoObjects2.length = 0;


return;

}

gdjs['LoserCode'] = gdjs.LoserCode;
