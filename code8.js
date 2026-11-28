gdjs.Materi2Code = {};
gdjs.Materi2Code.localVariables = [];
gdjs.Materi2Code.idToCallbackMap = new Map();
gdjs.Materi2Code.GDQuestionTransmission1Objects1= [];
gdjs.Materi2Code.GDQuestionTransmission1Objects2= [];
gdjs.Materi2Code.GDQuestionTransmission1Objects3= [];
gdjs.Materi2Code.GDQuestionTransmission2Objects1= [];
gdjs.Materi2Code.GDQuestionTransmission2Objects2= [];
gdjs.Materi2Code.GDQuestionTransmission2Objects3= [];
gdjs.Materi2Code.GDQuestionTransmission3Objects1= [];
gdjs.Materi2Code.GDQuestionTransmission3Objects2= [];
gdjs.Materi2Code.GDQuestionTransmission3Objects3= [];
gdjs.Materi2Code.GDQuestionTransmission4Objects1= [];
gdjs.Materi2Code.GDQuestionTransmission4Objects2= [];
gdjs.Materi2Code.GDQuestionTransmission4Objects3= [];
gdjs.Materi2Code.GDQuestionTransmission5Objects1= [];
gdjs.Materi2Code.GDQuestionTransmission5Objects2= [];
gdjs.Materi2Code.GDQuestionTransmission5Objects3= [];
gdjs.Materi2Code.GDWrongAnswerObjects1= [];
gdjs.Materi2Code.GDWrongAnswerObjects2= [];
gdjs.Materi2Code.GDWrongAnswerObjects3= [];
gdjs.Materi2Code.GDButtonEffectAObjects1= [];
gdjs.Materi2Code.GDButtonEffectAObjects2= [];
gdjs.Materi2Code.GDButtonEffectAObjects3= [];
gdjs.Materi2Code.GDButtonEffectBObjects1= [];
gdjs.Materi2Code.GDButtonEffectBObjects2= [];
gdjs.Materi2Code.GDButtonEffectBObjects3= [];
gdjs.Materi2Code.GDButtonEffectCObjects1= [];
gdjs.Materi2Code.GDButtonEffectCObjects2= [];
gdjs.Materi2Code.GDButtonEffectCObjects3= [];
gdjs.Materi2Code.GDButtonQuestion1AObjects1= [];
gdjs.Materi2Code.GDButtonQuestion1AObjects2= [];
gdjs.Materi2Code.GDButtonQuestion1AObjects3= [];
gdjs.Materi2Code.GDButtonQuestion1BObjects1= [];
gdjs.Materi2Code.GDButtonQuestion1BObjects2= [];
gdjs.Materi2Code.GDButtonQuestion1BObjects3= [];
gdjs.Materi2Code.GDButtonQuestion1CObjects1= [];
gdjs.Materi2Code.GDButtonQuestion1CObjects2= [];
gdjs.Materi2Code.GDButtonQuestion1CObjects3= [];
gdjs.Materi2Code.GDButtonQuestion2AObjects1= [];
gdjs.Materi2Code.GDButtonQuestion2AObjects2= [];
gdjs.Materi2Code.GDButtonQuestion2AObjects3= [];
gdjs.Materi2Code.GDButtonQuestion2BObjects1= [];
gdjs.Materi2Code.GDButtonQuestion2BObjects2= [];
gdjs.Materi2Code.GDButtonQuestion2BObjects3= [];
gdjs.Materi2Code.GDButtonQuestion2CObjects1= [];
gdjs.Materi2Code.GDButtonQuestion2CObjects2= [];
gdjs.Materi2Code.GDButtonQuestion2CObjects3= [];
gdjs.Materi2Code.GDButtonQuestion3AObjects1= [];
gdjs.Materi2Code.GDButtonQuestion3AObjects2= [];
gdjs.Materi2Code.GDButtonQuestion3AObjects3= [];
gdjs.Materi2Code.GDButtonQuestion3BObjects1= [];
gdjs.Materi2Code.GDButtonQuestion3BObjects2= [];
gdjs.Materi2Code.GDButtonQuestion3BObjects3= [];
gdjs.Materi2Code.GDButtonQuestion3CObjects1= [];
gdjs.Materi2Code.GDButtonQuestion3CObjects2= [];
gdjs.Materi2Code.GDButtonQuestion3CObjects3= [];
gdjs.Materi2Code.GDButtonQuestion4AObjects1= [];
gdjs.Materi2Code.GDButtonQuestion4AObjects2= [];
gdjs.Materi2Code.GDButtonQuestion4AObjects3= [];
gdjs.Materi2Code.GDButtonQuestion4BObjects1= [];
gdjs.Materi2Code.GDButtonQuestion4BObjects2= [];
gdjs.Materi2Code.GDButtonQuestion4BObjects3= [];
gdjs.Materi2Code.GDButtonQuestion4CObjects1= [];
gdjs.Materi2Code.GDButtonQuestion4CObjects2= [];
gdjs.Materi2Code.GDButtonQuestion4CObjects3= [];
gdjs.Materi2Code.GDButtonQuestion5AObjects1= [];
gdjs.Materi2Code.GDButtonQuestion5AObjects2= [];
gdjs.Materi2Code.GDButtonQuestion5AObjects3= [];
gdjs.Materi2Code.GDButtonQuestion5BObjects1= [];
gdjs.Materi2Code.GDButtonQuestion5BObjects2= [];
gdjs.Materi2Code.GDButtonQuestion5BObjects3= [];
gdjs.Materi2Code.GDButtonQuestion5CObjects1= [];
gdjs.Materi2Code.GDButtonQuestion5CObjects2= [];
gdjs.Materi2Code.GDButtonQuestion5CObjects3= [];


gdjs.Materi2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi2Code.GDButtonEffectAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi2Code.GDButtonEffectBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi2Code.GDButtonEffectCObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1A"), gdjs.Materi2Code.GDButtonQuestion1AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1B"), gdjs.Materi2Code.GDButtonQuestion1BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1C"), gdjs.Materi2Code.GDButtonQuestion1CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2A"), gdjs.Materi2Code.GDButtonQuestion2AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2B"), gdjs.Materi2Code.GDButtonQuestion2BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2C"), gdjs.Materi2Code.GDButtonQuestion2CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3A"), gdjs.Materi2Code.GDButtonQuestion3AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3B"), gdjs.Materi2Code.GDButtonQuestion3BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3C"), gdjs.Materi2Code.GDButtonQuestion3CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4A"), gdjs.Materi2Code.GDButtonQuestion4AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4B"), gdjs.Materi2Code.GDButtonQuestion4BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4C"), gdjs.Materi2Code.GDButtonQuestion4CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5A"), gdjs.Materi2Code.GDButtonQuestion5AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5B"), gdjs.Materi2Code.GDButtonQuestion5BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5C"), gdjs.Materi2Code.GDButtonQuestion5CObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission1"), gdjs.Materi2Code.GDQuestionTransmission1Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission2"), gdjs.Materi2Code.GDQuestionTransmission2Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission3"), gdjs.Materi2Code.GDQuestionTransmission3Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission4"), gdjs.Materi2Code.GDQuestionTransmission4Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission5"), gdjs.Materi2Code.GDQuestionTransmission5Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission1Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission2Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission3Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission4Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission5Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1AObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1BObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1CObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2CObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3CObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4CObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1AObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1BObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1CObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2AObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2BObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2CObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3AObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3BObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3CObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4AObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4BObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4CObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5AObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5BObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectAObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectBObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectCObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectAObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectBObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectCObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission1Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission1Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission2Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission2Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission3Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission3Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission4Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission4Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission5Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission5Objects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectAObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectBObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectCObjects1[i].setZOrder(20);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonEffectAObjects1Objects = Hashtable.newFrom({"ButtonEffectA": gdjs.Materi2Code.GDButtonEffectAObjects1});
gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonEffectBObjects1Objects = Hashtable.newFrom({"ButtonEffectB": gdjs.Materi2Code.GDButtonEffectBObjects1});
gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonEffectCObjects1Objects = Hashtable.newFrom({"ButtonEffectC": gdjs.Materi2Code.GDButtonEffectCObjects1});
gdjs.Materi2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1C"), gdjs.Materi2Code.GDButtonQuestion1CObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1CObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1CObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1CObjects2[k] = gdjs.Materi2Code.GDButtonQuestion1CObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1CObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1CObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1CObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1CObjects2[k] = gdjs.Materi2Code.GDButtonQuestion1CObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1CObjects2.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1A"), gdjs.Materi2Code.GDButtonQuestion1AObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1B"), gdjs.Materi2Code.GDButtonQuestion1BObjects2);
/* Reuse gdjs.Materi2Code.GDButtonQuestion1CObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(12);
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1CObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1A"), gdjs.Materi2Code.GDButtonQuestion1AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1AObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion1AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1AObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion1AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1AObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonQuestion1AObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1B"), gdjs.Materi2Code.GDButtonQuestion1BObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1C"), gdjs.Materi2Code.GDButtonQuestion1CObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission1"), gdjs.Materi2Code.GDQuestionTransmission1Objects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission1Objects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission1Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1CObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1B"), gdjs.Materi2Code.GDButtonQuestion1BObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1BObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1BObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1BObjects1[k] = gdjs.Materi2Code.GDButtonQuestion1BObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1BObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1BObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1BObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1BObjects1[k] = gdjs.Materi2Code.GDButtonQuestion1BObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1BObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1A"), gdjs.Materi2Code.GDButtonQuestion1AObjects1);
/* Reuse gdjs.Materi2Code.GDButtonQuestion1BObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1C"), gdjs.Materi2Code.GDButtonQuestion1CObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission1"), gdjs.Materi2Code.GDQuestionTransmission1Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission1Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1CObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi2Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2A"), gdjs.Materi2Code.GDButtonQuestion2AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion2AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion2AObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion2AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion2AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion2AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion2AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion2AObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion2AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion2AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion2AObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonQuestion2AObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2B"), gdjs.Materi2Code.GDButtonQuestion2BObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2C"), gdjs.Materi2Code.GDButtonQuestion2CObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(23);
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2CObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2B"), gdjs.Materi2Code.GDButtonQuestion2BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion2BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion2BObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion2BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion2BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion2BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion2BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion2BObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion2BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion2BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion2BObjects2.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2A"), gdjs.Materi2Code.GDButtonQuestion2AObjects2);
/* Reuse gdjs.Materi2Code.GDButtonQuestion2BObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2C"), gdjs.Materi2Code.GDButtonQuestion2CObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission2"), gdjs.Materi2Code.GDQuestionTransmission2Objects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission2Objects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2CObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2C"), gdjs.Materi2Code.GDButtonQuestion2CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion2CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion2CObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion2CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion2CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion2CObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion2CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion2CObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion2CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion2CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion2CObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2A"), gdjs.Materi2Code.GDButtonQuestion2AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2B"), gdjs.Materi2Code.GDButtonQuestion2BObjects1);
/* Reuse gdjs.Materi2Code.GDButtonQuestion2CObjects1 */
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission2"), gdjs.Materi2Code.GDQuestionTransmission2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission2Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2CObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi2Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3A"), gdjs.Materi2Code.GDButtonQuestion3AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion3AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion3AObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion3AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion3AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion3AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion3AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion3AObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion3AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion3AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion3AObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonQuestion3AObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3B"), gdjs.Materi2Code.GDButtonQuestion3BObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3C"), gdjs.Materi2Code.GDButtonQuestion3CObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(34);
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3CObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3B"), gdjs.Materi2Code.GDButtonQuestion3BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion3BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion3BObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion3BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion3BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion3BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion3BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion3BObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion3BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion3BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion3BObjects2.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3A"), gdjs.Materi2Code.GDButtonQuestion3AObjects2);
/* Reuse gdjs.Materi2Code.GDButtonQuestion3BObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3C"), gdjs.Materi2Code.GDButtonQuestion3CObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission3"), gdjs.Materi2Code.GDQuestionTransmission3Objects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission3Objects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3CObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3C"), gdjs.Materi2Code.GDButtonQuestion3CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion3CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion3CObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion3CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion3CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion3CObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion3CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion3CObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion3CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion3CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion3CObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3A"), gdjs.Materi2Code.GDButtonQuestion3AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3B"), gdjs.Materi2Code.GDButtonQuestion3BObjects1);
/* Reuse gdjs.Materi2Code.GDButtonQuestion3CObjects1 */
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission3"), gdjs.Materi2Code.GDQuestionTransmission3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission3Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3CObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4A"), gdjs.Materi2Code.GDButtonQuestion4AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion4AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion4AObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion4AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion4AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion4AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion4AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion4AObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion4AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion4AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion4AObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonQuestion4AObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4B"), gdjs.Materi2Code.GDButtonQuestion4BObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4C"), gdjs.Materi2Code.GDButtonQuestion4CObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(45);
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4CObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4B"), gdjs.Materi2Code.GDButtonQuestion4BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion4BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion4BObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion4BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion4BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion4BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion4BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion4BObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion4BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion4BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion4BObjects2.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4A"), gdjs.Materi2Code.GDButtonQuestion4AObjects2);
/* Reuse gdjs.Materi2Code.GDButtonQuestion4BObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4C"), gdjs.Materi2Code.GDButtonQuestion4CObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission4"), gdjs.Materi2Code.GDQuestionTransmission4Objects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission4Objects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission4Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4CObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4C"), gdjs.Materi2Code.GDButtonQuestion4CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion4CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion4CObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion4CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion4CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion4CObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion4CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion4CObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion4CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion4CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion4CObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4A"), gdjs.Materi2Code.GDButtonQuestion4AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4B"), gdjs.Materi2Code.GDButtonQuestion4BObjects1);
/* Reuse gdjs.Materi2Code.GDButtonQuestion4CObjects1 */
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission4"), gdjs.Materi2Code.GDQuestionTransmission4Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission4Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4CObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5B"), gdjs.Materi2Code.GDButtonQuestion5BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5BObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion5BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5BObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5BObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5BObjects2[k] = gdjs.Materi2Code.GDButtonQuestion5BObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5BObjects2.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5A"), gdjs.Materi2Code.GDButtonQuestion5AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5AObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion5AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5AObjects2.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5AObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5AObjects2[k] = gdjs.Materi2Code.GDButtonQuestion5AObjects2[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5AObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonQuestion5AObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5B"), gdjs.Materi2Code.GDButtonQuestion5BObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5C"), gdjs.Materi2Code.GDButtonQuestion5CObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission5"), gdjs.Materi2Code.GDQuestionTransmission5Objects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission5Objects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission5Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5AObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5AObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5BObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5BObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5CObjects2.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5CObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5C"), gdjs.Materi2Code.GDButtonQuestion5CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion5CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5CObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion5CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5CObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5A"), gdjs.Materi2Code.GDButtonQuestion5AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5B"), gdjs.Materi2Code.GDButtonQuestion5BObjects1);
/* Reuse gdjs.Materi2Code.GDButtonQuestion5CObjects1 */
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission5"), gdjs.Materi2Code.GDQuestionTransmission5Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission5Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi2Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "WrongTimer") > 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1A"), gdjs.Materi2Code.GDButtonQuestion1AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1B"), gdjs.Materi2Code.GDButtonQuestion1BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1C"), gdjs.Materi2Code.GDButtonQuestion1CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2A"), gdjs.Materi2Code.GDButtonQuestion2AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2B"), gdjs.Materi2Code.GDButtonQuestion2BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2C"), gdjs.Materi2Code.GDButtonQuestion2CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3A"), gdjs.Materi2Code.GDButtonQuestion3AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3B"), gdjs.Materi2Code.GDButtonQuestion3BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3C"), gdjs.Materi2Code.GDButtonQuestion3CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4A"), gdjs.Materi2Code.GDButtonQuestion4AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4B"), gdjs.Materi2Code.GDButtonQuestion4BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4C"), gdjs.Materi2Code.GDButtonQuestion4CObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5A"), gdjs.Materi2Code.GDButtonQuestion5AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5B"), gdjs.Materi2Code.GDButtonQuestion5BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5C"), gdjs.Materi2Code.GDButtonQuestion5CObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission1"), gdjs.Materi2Code.GDQuestionTransmission1Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission2"), gdjs.Materi2Code.GDQuestionTransmission2Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission3"), gdjs.Materi2Code.GDQuestionTransmission3Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission4"), gdjs.Materi2Code.GDQuestionTransmission4Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission5"), gdjs.Materi2Code.GDQuestionTransmission5Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDWrongAnswerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission1Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission2Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission3Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission4Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission5Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1AObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1BObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion1CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion1CObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2CObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3CObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4CObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5BObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


};gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonQuestion1AObjects1Objects = Hashtable.newFrom({"ButtonQuestion1A": gdjs.Materi2Code.GDButtonQuestion1AObjects1});
gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonQuestion1BObjects1Objects = Hashtable.newFrom({"ButtonQuestion1B": gdjs.Materi2Code.GDButtonQuestion1BObjects1});
gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonQuestion1CObjects1Objects = Hashtable.newFrom({"ButtonQuestion1C": gdjs.Materi2Code.GDButtonQuestion1CObjects1});
gdjs.Materi2Code.eventsList7 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


gdjs.Materi2Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi2Code.GDButtonEffectAObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonEffectAObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonEffectAObjects1 */
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectAObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi2Code.GDButtonEffectAObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectAObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi2Code.GDButtonEffectBObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonEffectBObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonEffectBObjects1 */
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectBObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi2Code.GDButtonEffectBObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectBObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi2Code.GDButtonEffectCObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonEffectCObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Materi2Code.GDButtonEffectCObjects1 */
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectCObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi2Code.GDButtonEffectCObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectCObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


gdjs.Materi2Code.eventsList1(runtimeScene);
}


{


gdjs.Materi2Code.eventsList2(runtimeScene);
}


{


gdjs.Materi2Code.eventsList3(runtimeScene);
}


{


gdjs.Materi2Code.eventsList4(runtimeScene);
}


{


gdjs.Materi2Code.eventsList5(runtimeScene);
}


{


gdjs.Materi2Code.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 12);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextTimer") > 0.2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2A"), gdjs.Materi2Code.GDButtonQuestion2AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2B"), gdjs.Materi2Code.GDButtonQuestion2BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion2C"), gdjs.Materi2Code.GDButtonQuestion2CObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission1"), gdjs.Materi2Code.GDQuestionTransmission1Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission2"), gdjs.Materi2Code.GDQuestionTransmission2Objects1);
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission1Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission2Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2AObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2BObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion2CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion2CObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 23);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextTimer") > 0.2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3A"), gdjs.Materi2Code.GDButtonQuestion3AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3B"), gdjs.Materi2Code.GDButtonQuestion3BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion3C"), gdjs.Materi2Code.GDButtonQuestion3CObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission2"), gdjs.Materi2Code.GDQuestionTransmission2Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission3"), gdjs.Materi2Code.GDQuestionTransmission3Objects1);
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission2Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission3Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3AObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3BObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion3CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion3CObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 34);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextTimer") > 0.2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4A"), gdjs.Materi2Code.GDButtonQuestion4AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4B"), gdjs.Materi2Code.GDButtonQuestion4BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion4C"), gdjs.Materi2Code.GDButtonQuestion4CObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission3"), gdjs.Materi2Code.GDQuestionTransmission3Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission4"), gdjs.Materi2Code.GDQuestionTransmission4Objects1);
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission3Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission4Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4AObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4BObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion4CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion4CObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 45);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextTimer") > 0.2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5A"), gdjs.Materi2Code.GDButtonQuestion5AObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5B"), gdjs.Materi2Code.GDButtonQuestion5BObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5C"), gdjs.Materi2Code.GDButtonQuestion5CObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission4"), gdjs.Materi2Code.GDQuestionTransmission4Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionTransmission5"), gdjs.Materi2Code.GDQuestionTransmission5Objects1);
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission4Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDQuestionTransmission5Objects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDQuestionTransmission5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5AObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5AObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5BObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5BObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi2Code.GDWrongAnswerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDWrongAnswerObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDWrongAnswerObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDWrongAnswerObjects1[k] = gdjs.Materi2Code.GDWrongAnswerObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDWrongAnswerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi2Code.GDButtonEffectAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi2Code.GDButtonEffectBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi2Code.GDButtonEffectCObjects1);
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectAObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectBObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi2Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi2Code.GDButtonEffectCObjects1[i].setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1A"), gdjs.Materi2Code.GDButtonQuestion1AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1AObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1AObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1AObjects1[k] = gdjs.Materi2Code.GDButtonQuestion1AObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1AObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1B"), gdjs.Materi2Code.GDButtonQuestion1BObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1BObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1BObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1BObjects1[k] = gdjs.Materi2Code.GDButtonQuestion1BObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1BObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1C"), gdjs.Materi2Code.GDButtonQuestion1CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion1CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion1CObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion1CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion1CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion1CObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5A"), gdjs.Materi2Code.GDButtonQuestion5AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5AObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5AObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5AObjects1[k] = gdjs.Materi2Code.GDButtonQuestion5AObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5AObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5B"), gdjs.Materi2Code.GDButtonQuestion5BObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5BObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5BObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5BObjects1[k] = gdjs.Materi2Code.GDButtonQuestion5BObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5BObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion5C"), gdjs.Materi2Code.GDButtonQuestion5CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi2Code.GDButtonQuestion5CObjects1.length;i<l;++i) {
    if ( gdjs.Materi2Code.GDButtonQuestion5CObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi2Code.GDButtonQuestion5CObjects1[k] = gdjs.Materi2Code.GDButtonQuestion5CObjects1[i];
        ++k;
    }
}
gdjs.Materi2Code.GDButtonQuestion5CObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1A"), gdjs.Materi2Code.GDButtonQuestion1AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonQuestion1AObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17980916);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1B"), gdjs.Materi2Code.GDButtonQuestion1BObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonQuestion1BObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17981932);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonQuestion1C"), gdjs.Materi2Code.GDButtonQuestion1CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi2Code.mapOfGDgdjs_9546Materi2Code_9546GDButtonQuestion1CObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17982916);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}

}

};

gdjs.Materi2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Materi2Code.GDQuestionTransmission1Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission1Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission1Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission2Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission2Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission2Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission3Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission3Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission3Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission4Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission4Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission4Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission5Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission5Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission5Objects3.length = 0;
gdjs.Materi2Code.GDWrongAnswerObjects1.length = 0;
gdjs.Materi2Code.GDWrongAnswerObjects2.length = 0;
gdjs.Materi2Code.GDWrongAnswerObjects3.length = 0;
gdjs.Materi2Code.GDButtonEffectAObjects1.length = 0;
gdjs.Materi2Code.GDButtonEffectAObjects2.length = 0;
gdjs.Materi2Code.GDButtonEffectAObjects3.length = 0;
gdjs.Materi2Code.GDButtonEffectBObjects1.length = 0;
gdjs.Materi2Code.GDButtonEffectBObjects2.length = 0;
gdjs.Materi2Code.GDButtonEffectBObjects3.length = 0;
gdjs.Materi2Code.GDButtonEffectCObjects1.length = 0;
gdjs.Materi2Code.GDButtonEffectCObjects2.length = 0;
gdjs.Materi2Code.GDButtonEffectCObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion1AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion1AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion1AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion1BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion1BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion1BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion1CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion1CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion1CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion2AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion2AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion2AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion2BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion2BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion2BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion2CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion2CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion2CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion3AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion3AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion3AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion3BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion3BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion3BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion3CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion3CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion3CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion4AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion4AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion4AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion4BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion4BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion4BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion4CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion4CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion4CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion5AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion5AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion5AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion5BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion5BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion5BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion5CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion5CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion5CObjects3.length = 0;

gdjs.Materi2Code.eventsList7(runtimeScene);
gdjs.Materi2Code.GDQuestionTransmission1Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission1Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission1Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission2Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission2Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission2Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission3Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission3Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission3Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission4Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission4Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission4Objects3.length = 0;
gdjs.Materi2Code.GDQuestionTransmission5Objects1.length = 0;
gdjs.Materi2Code.GDQuestionTransmission5Objects2.length = 0;
gdjs.Materi2Code.GDQuestionTransmission5Objects3.length = 0;
gdjs.Materi2Code.GDWrongAnswerObjects1.length = 0;
gdjs.Materi2Code.GDWrongAnswerObjects2.length = 0;
gdjs.Materi2Code.GDWrongAnswerObjects3.length = 0;
gdjs.Materi2Code.GDButtonEffectAObjects1.length = 0;
gdjs.Materi2Code.GDButtonEffectAObjects2.length = 0;
gdjs.Materi2Code.GDButtonEffectAObjects3.length = 0;
gdjs.Materi2Code.GDButtonEffectBObjects1.length = 0;
gdjs.Materi2Code.GDButtonEffectBObjects2.length = 0;
gdjs.Materi2Code.GDButtonEffectBObjects3.length = 0;
gdjs.Materi2Code.GDButtonEffectCObjects1.length = 0;
gdjs.Materi2Code.GDButtonEffectCObjects2.length = 0;
gdjs.Materi2Code.GDButtonEffectCObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion1AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion1AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion1AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion1BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion1BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion1BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion1CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion1CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion1CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion2AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion2AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion2AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion2BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion2BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion2BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion2CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion2CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion2CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion3AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion3AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion3AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion3BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion3BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion3BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion3CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion3CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion3CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion4AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion4AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion4AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion4BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion4BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion4BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion4CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion4CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion4CObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion5AObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion5AObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion5AObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion5BObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion5BObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion5BObjects3.length = 0;
gdjs.Materi2Code.GDButtonQuestion5CObjects1.length = 0;
gdjs.Materi2Code.GDButtonQuestion5CObjects2.length = 0;
gdjs.Materi2Code.GDButtonQuestion5CObjects3.length = 0;


return;

}

gdjs['Materi2Code'] = gdjs.Materi2Code;
