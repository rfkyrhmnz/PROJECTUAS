gdjs.Materi1Code = {};
gdjs.Materi1Code.localVariables = [];
gdjs.Materi1Code.idToCallbackMap = new Map();
gdjs.Materi1Code.GDQuestionObjects1= [];
gdjs.Materi1Code.GDQuestionObjects2= [];
gdjs.Materi1Code.GDQuestionObjects3= [];
gdjs.Materi1Code.GDQuestion2Objects1= [];
gdjs.Materi1Code.GDQuestion2Objects2= [];
gdjs.Materi1Code.GDQuestion2Objects3= [];
gdjs.Materi1Code.GDQuestion3Objects1= [];
gdjs.Materi1Code.GDQuestion3Objects2= [];
gdjs.Materi1Code.GDQuestion3Objects3= [];
gdjs.Materi1Code.GDWrongAnswerObjects1= [];
gdjs.Materi1Code.GDWrongAnswerObjects2= [];
gdjs.Materi1Code.GDWrongAnswerObjects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects3= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2= [];
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects3= [];
gdjs.Materi1Code.GDButtonAQuestionObjects1= [];
gdjs.Materi1Code.GDButtonAQuestionObjects2= [];
gdjs.Materi1Code.GDButtonAQuestionObjects3= [];
gdjs.Materi1Code.GDButtonBQuestionObjects1= [];
gdjs.Materi1Code.GDButtonBQuestionObjects2= [];
gdjs.Materi1Code.GDButtonBQuestionObjects3= [];
gdjs.Materi1Code.GDButtonCQuestionObjects1= [];
gdjs.Materi1Code.GDButtonCQuestionObjects2= [];
gdjs.Materi1Code.GDButtonCQuestionObjects3= [];
gdjs.Materi1Code.GDButtonAQuestion2Objects1= [];
gdjs.Materi1Code.GDButtonAQuestion2Objects2= [];
gdjs.Materi1Code.GDButtonAQuestion2Objects3= [];
gdjs.Materi1Code.GDButtonBQuestion2Objects1= [];
gdjs.Materi1Code.GDButtonBQuestion2Objects2= [];
gdjs.Materi1Code.GDButtonBQuestion2Objects3= [];
gdjs.Materi1Code.GDButtonCQuestion2Objects1= [];
gdjs.Materi1Code.GDButtonCQuestion2Objects2= [];
gdjs.Materi1Code.GDButtonCQuestion2Objects3= [];
gdjs.Materi1Code.GDButtonAQuestion3Objects1= [];
gdjs.Materi1Code.GDButtonAQuestion3Objects2= [];
gdjs.Materi1Code.GDButtonAQuestion3Objects3= [];
gdjs.Materi1Code.GDButtonBQuestion3Objects1= [];
gdjs.Materi1Code.GDButtonBQuestion3Objects2= [];
gdjs.Materi1Code.GDButtonBQuestion3Objects3= [];
gdjs.Materi1Code.GDButtonCQuestion3Objects1= [];
gdjs.Materi1Code.GDButtonCQuestion3Objects2= [];
gdjs.Materi1Code.GDButtonCQuestion3Objects3= [];
gdjs.Materi1Code.GDButtonEffectAObjects1= [];
gdjs.Materi1Code.GDButtonEffectAObjects2= [];
gdjs.Materi1Code.GDButtonEffectAObjects3= [];
gdjs.Materi1Code.GDButtonEffectBObjects1= [];
gdjs.Materi1Code.GDButtonEffectBObjects2= [];
gdjs.Materi1Code.GDButtonEffectBObjects3= [];
gdjs.Materi1Code.GDButtonEffectCObjects1= [];
gdjs.Materi1Code.GDButtonEffectCObjects2= [];
gdjs.Materi1Code.GDButtonEffectCObjects3= [];


gdjs.Materi1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion"), gdjs.Materi1Code.GDButtonAQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion2"), gdjs.Materi1Code.GDButtonAQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion3"), gdjs.Materi1Code.GDButtonAQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion"), gdjs.Materi1Code.GDButtonBQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion2"), gdjs.Materi1Code.GDButtonBQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion3"), gdjs.Materi1Code.GDButtonBQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion"), gdjs.Materi1Code.GDButtonCQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion2"), gdjs.Materi1Code.GDButtonCQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion3"), gdjs.Materi1Code.GDButtonCQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi1Code.GDButtonEffectAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi1Code.GDButtonEffectBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi1Code.GDButtonEffectCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.Materi1Code.GDQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Materi1Code.GDQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Materi1Code.GDQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectAObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectBObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectCObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectAObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectBObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectCObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectAObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectBObjects1[i].setZOrder(20);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectCObjects1[i].setZOrder(20);
}
}
}

}


};gdjs.Materi1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion"), gdjs.Materi1Code.GDButtonBQuestionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonBQuestionObjects2.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonBQuestionObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonBQuestionObjects2[k] = gdjs.Materi1Code.GDButtonBQuestionObjects2[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonBQuestionObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion"), gdjs.Materi1Code.GDButtonAQuestionObjects2);
/* Reuse gdjs.Materi1Code.GDButtonBQuestionObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion"), gdjs.Materi1Code.GDButtonCQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(12);
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextTimer");
}
}

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
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion2"), gdjs.Materi1Code.GDButtonAQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion2"), gdjs.Materi1Code.GDButtonBQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion2"), gdjs.Materi1Code.GDButtonCQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.Materi1Code.GDQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Materi1Code.GDQuestion2Objects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion"), gdjs.Materi1Code.GDButtonAQuestionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonAQuestionObjects2.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonAQuestionObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonAQuestionObjects2[k] = gdjs.Materi1Code.GDButtonAQuestionObjects2[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonAQuestionObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Materi1Code.GDButtonAQuestionObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion"), gdjs.Materi1Code.GDButtonBQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion"), gdjs.Materi1Code.GDButtonCQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.Materi1Code.GDQuestionObjects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion"), gdjs.Materi1Code.GDButtonCQuestionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonCQuestionObjects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonCQuestionObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonCQuestionObjects1[k] = gdjs.Materi1Code.GDButtonCQuestionObjects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonCQuestionObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion"), gdjs.Materi1Code.GDButtonAQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion"), gdjs.Materi1Code.GDButtonBQuestionObjects1);
/* Reuse gdjs.Materi1Code.GDButtonCQuestionObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.Materi1Code.GDQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestionObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestionObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestionObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestionObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion2"), gdjs.Materi1Code.GDButtonAQuestion2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonAQuestion2Objects2.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonAQuestion2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonAQuestion2Objects2[k] = gdjs.Materi1Code.GDButtonAQuestion2Objects2[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonAQuestion2Objects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Materi1Code.GDButtonAQuestion2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion2"), gdjs.Materi1Code.GDButtonBQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion2"), gdjs.Materi1Code.GDButtonCQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(23);
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextTimer");
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
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion3"), gdjs.Materi1Code.GDButtonAQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion3"), gdjs.Materi1Code.GDButtonBQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion3"), gdjs.Materi1Code.GDButtonCQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Materi1Code.GDQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Materi1Code.GDQuestion3Objects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion2"), gdjs.Materi1Code.GDButtonBQuestion2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonBQuestion2Objects2.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonBQuestion2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonBQuestion2Objects2[k] = gdjs.Materi1Code.GDButtonBQuestion2Objects2[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonBQuestion2Objects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion2"), gdjs.Materi1Code.GDButtonAQuestion2Objects2);
/* Reuse gdjs.Materi1Code.GDButtonBQuestion2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion2"), gdjs.Materi1Code.GDButtonCQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Materi1Code.GDQuestion2Objects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion2"), gdjs.Materi1Code.GDButtonCQuestion2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonCQuestion2Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonCQuestion2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonCQuestion2Objects1[k] = gdjs.Materi1Code.GDButtonCQuestion2Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonCQuestion2Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion2"), gdjs.Materi1Code.GDButtonAQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion2"), gdjs.Materi1Code.GDButtonBQuestion2Objects1);
/* Reuse gdjs.Materi1Code.GDButtonCQuestion2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Materi1Code.GDQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi1Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion3"), gdjs.Materi1Code.GDButtonAQuestion3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonAQuestion3Objects2.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonAQuestion3Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonAQuestion3Objects2[k] = gdjs.Materi1Code.GDButtonAQuestion3Objects2[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonAQuestion3Objects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion3"), gdjs.Materi1Code.GDButtonBQuestion3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonBQuestion3Objects2.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonBQuestion3Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonBQuestion3Objects2[k] = gdjs.Materi1Code.GDButtonBQuestion3Objects2[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonBQuestion3Objects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion3"), gdjs.Materi1Code.GDButtonAQuestion3Objects2);
/* Reuse gdjs.Materi1Code.GDButtonBQuestion3Objects2 */
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion3"), gdjs.Materi1Code.GDButtonCQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Materi1Code.GDQuestion3Objects2);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects2);
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion3"), gdjs.Materi1Code.GDButtonCQuestion3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonCQuestion3Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonCQuestion3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonCQuestion3Objects1[k] = gdjs.Materi1Code.GDButtonCQuestion3Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonCQuestion3Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion3"), gdjs.Materi1Code.GDButtonAQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion3"), gdjs.Materi1Code.GDButtonBQuestion3Objects1);
/* Reuse gdjs.Materi1Code.GDButtonCQuestion3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Materi1Code.GDQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WrongTimer");
}
}

}


};gdjs.Materi1Code.eventsList4 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion"), gdjs.Materi1Code.GDButtonAQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion2"), gdjs.Materi1Code.GDButtonAQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion3"), gdjs.Materi1Code.GDButtonAQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion"), gdjs.Materi1Code.GDButtonBQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion2"), gdjs.Materi1Code.GDButtonBQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion3"), gdjs.Materi1Code.GDButtonBQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion"), gdjs.Materi1Code.GDButtonCQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion2"), gdjs.Materi1Code.GDButtonCQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion3"), gdjs.Materi1Code.GDButtonCQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonAQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonBQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion2"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Label_ButtonCQuestion3"), gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.Materi1Code.GDQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Materi1Code.GDQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Materi1Code.GDQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDWrongAnswerObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDWrongAnswerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonAQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonAQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonBQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonBQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonCQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonCQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


};gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonEffectAObjects1Objects = Hashtable.newFrom({"ButtonEffectA": gdjs.Materi1Code.GDButtonEffectAObjects1});
gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonEffectBObjects1Objects = Hashtable.newFrom({"ButtonEffectB": gdjs.Materi1Code.GDButtonEffectBObjects1});
gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonEffectCObjects1Objects = Hashtable.newFrom({"ButtonEffectC": gdjs.Materi1Code.GDButtonEffectCObjects1});
gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonAQuestionObjects1Objects = Hashtable.newFrom({"ButtonAQuestion": gdjs.Materi1Code.GDButtonAQuestionObjects1});
gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonBQuestionObjects1Objects = Hashtable.newFrom({"ButtonBQuestion": gdjs.Materi1Code.GDButtonBQuestionObjects1});
gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonCQuestionObjects1Objects = Hashtable.newFrom({"ButtonCQuestion": gdjs.Materi1Code.GDButtonCQuestionObjects1});
gdjs.Materi1Code.eventsList5 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


gdjs.Materi1Code.eventsList0(runtimeScene);
}


{


gdjs.Materi1Code.eventsList1(runtimeScene);
}


{


gdjs.Materi1Code.eventsList2(runtimeScene);
}


{


gdjs.Materi1Code.eventsList3(runtimeScene);
}


{


gdjs.Materi1Code.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi1Code.GDButtonEffectAObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonEffectAObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Materi1Code.GDButtonEffectAObjects1 */
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectAObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi1Code.GDButtonEffectAObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectAObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi1Code.GDButtonEffectBObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonEffectBObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Materi1Code.GDButtonEffectBObjects1 */
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectBObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi1Code.GDButtonEffectBObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectBObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi1Code.GDButtonEffectCObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonEffectCObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Materi1Code.GDButtonEffectCObjects1 */
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectCObjects1[i].setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi1Code.GDButtonEffectCObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectCObjects1[i].setOpacity(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WrongAnswer"), gdjs.Materi1Code.GDWrongAnswerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDWrongAnswerObjects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDWrongAnswerObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDWrongAnswerObjects1[k] = gdjs.Materi1Code.GDWrongAnswerObjects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDWrongAnswerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectA"), gdjs.Materi1Code.GDButtonEffectAObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectB"), gdjs.Materi1Code.GDButtonEffectBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEffectC"), gdjs.Materi1Code.GDButtonEffectCObjects1);
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectAObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectAObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectBObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectBObjects1[i].setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Materi1Code.GDButtonEffectCObjects1.length ;i < len;++i) {
    gdjs.Materi1Code.GDButtonEffectCObjects1[i].setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion"), gdjs.Materi1Code.GDButtonAQuestionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonAQuestionObjects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonAQuestionObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonAQuestionObjects1[k] = gdjs.Materi1Code.GDButtonAQuestionObjects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonAQuestionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion"), gdjs.Materi1Code.GDButtonBQuestionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonBQuestionObjects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonBQuestionObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonBQuestionObjects1[k] = gdjs.Materi1Code.GDButtonBQuestionObjects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonBQuestionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion"), gdjs.Materi1Code.GDButtonCQuestionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonCQuestionObjects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonCQuestionObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonCQuestionObjects1[k] = gdjs.Materi1Code.GDButtonCQuestionObjects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonCQuestionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion2"), gdjs.Materi1Code.GDButtonAQuestion2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonAQuestion2Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonAQuestion2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonAQuestion2Objects1[k] = gdjs.Materi1Code.GDButtonAQuestion2Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonAQuestion2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion2"), gdjs.Materi1Code.GDButtonBQuestion2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonBQuestion2Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonBQuestion2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonBQuestion2Objects1[k] = gdjs.Materi1Code.GDButtonBQuestion2Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonBQuestion2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion2"), gdjs.Materi1Code.GDButtonCQuestion2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonCQuestion2Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonCQuestion2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonCQuestion2Objects1[k] = gdjs.Materi1Code.GDButtonCQuestion2Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonCQuestion2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion3"), gdjs.Materi1Code.GDButtonAQuestion3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonAQuestion3Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonAQuestion3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonAQuestion3Objects1[k] = gdjs.Materi1Code.GDButtonAQuestion3Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonAQuestion3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion3"), gdjs.Materi1Code.GDButtonBQuestion3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonBQuestion3Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonBQuestion3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonBQuestion3Objects1[k] = gdjs.Materi1Code.GDButtonBQuestion3Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonBQuestion3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion3"), gdjs.Materi1Code.GDButtonCQuestion3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Materi1Code.GDButtonCQuestion3Objects1.length;i<l;++i) {
    if ( gdjs.Materi1Code.GDButtonCQuestion3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Materi1Code.GDButtonCQuestion3Objects1[k] = gdjs.Materi1Code.GDButtonCQuestion3Objects1[i];
        ++k;
    }
}
gdjs.Materi1Code.GDButtonCQuestion3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonAQuestion"), gdjs.Materi1Code.GDButtonAQuestionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonAQuestionObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17825980);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBQuestion"), gdjs.Materi1Code.GDButtonBQuestionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonBQuestionObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17827228);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCQuestion"), gdjs.Materi1Code.GDButtonCQuestionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Materi1Code.mapOfGDgdjs_9546Materi1Code_9546GDButtonCQuestionObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17827892);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_05.aac", false, 60, 1);
}
}

}

}

};

gdjs.Materi1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Materi1Code.GDQuestionObjects1.length = 0;
gdjs.Materi1Code.GDQuestionObjects2.length = 0;
gdjs.Materi1Code.GDQuestionObjects3.length = 0;
gdjs.Materi1Code.GDQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDWrongAnswerObjects1.length = 0;
gdjs.Materi1Code.GDWrongAnswerObjects2.length = 0;
gdjs.Materi1Code.GDWrongAnswerObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonAQuestionObjects1.length = 0;
gdjs.Materi1Code.GDButtonAQuestionObjects2.length = 0;
gdjs.Materi1Code.GDButtonAQuestionObjects3.length = 0;
gdjs.Materi1Code.GDButtonBQuestionObjects1.length = 0;
gdjs.Materi1Code.GDButtonBQuestionObjects2.length = 0;
gdjs.Materi1Code.GDButtonBQuestionObjects3.length = 0;
gdjs.Materi1Code.GDButtonCQuestionObjects1.length = 0;
gdjs.Materi1Code.GDButtonCQuestionObjects2.length = 0;
gdjs.Materi1Code.GDButtonCQuestionObjects3.length = 0;
gdjs.Materi1Code.GDButtonAQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDButtonAQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDButtonAQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDButtonBQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDButtonBQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDButtonBQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDButtonCQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDButtonCQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDButtonCQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDButtonAQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDButtonAQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDButtonAQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonBQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDButtonBQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDButtonBQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonCQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDButtonCQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDButtonCQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonEffectAObjects1.length = 0;
gdjs.Materi1Code.GDButtonEffectAObjects2.length = 0;
gdjs.Materi1Code.GDButtonEffectAObjects3.length = 0;
gdjs.Materi1Code.GDButtonEffectBObjects1.length = 0;
gdjs.Materi1Code.GDButtonEffectBObjects2.length = 0;
gdjs.Materi1Code.GDButtonEffectBObjects3.length = 0;
gdjs.Materi1Code.GDButtonEffectCObjects1.length = 0;
gdjs.Materi1Code.GDButtonEffectCObjects2.length = 0;
gdjs.Materi1Code.GDButtonEffectCObjects3.length = 0;

gdjs.Materi1Code.eventsList5(runtimeScene);
gdjs.Materi1Code.GDQuestionObjects1.length = 0;
gdjs.Materi1Code.GDQuestionObjects2.length = 0;
gdjs.Materi1Code.GDQuestionObjects3.length = 0;
gdjs.Materi1Code.GDQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDWrongAnswerObjects1.length = 0;
gdjs.Materi1Code.GDWrongAnswerObjects2.length = 0;
gdjs.Materi1Code.GDWrongAnswerObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestionObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestionObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestionObjects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonAQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonBQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDLabel_9595ButtonCQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonAQuestionObjects1.length = 0;
gdjs.Materi1Code.GDButtonAQuestionObjects2.length = 0;
gdjs.Materi1Code.GDButtonAQuestionObjects3.length = 0;
gdjs.Materi1Code.GDButtonBQuestionObjects1.length = 0;
gdjs.Materi1Code.GDButtonBQuestionObjects2.length = 0;
gdjs.Materi1Code.GDButtonBQuestionObjects3.length = 0;
gdjs.Materi1Code.GDButtonCQuestionObjects1.length = 0;
gdjs.Materi1Code.GDButtonCQuestionObjects2.length = 0;
gdjs.Materi1Code.GDButtonCQuestionObjects3.length = 0;
gdjs.Materi1Code.GDButtonAQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDButtonAQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDButtonAQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDButtonBQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDButtonBQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDButtonBQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDButtonCQuestion2Objects1.length = 0;
gdjs.Materi1Code.GDButtonCQuestion2Objects2.length = 0;
gdjs.Materi1Code.GDButtonCQuestion2Objects3.length = 0;
gdjs.Materi1Code.GDButtonAQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDButtonAQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDButtonAQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonBQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDButtonBQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDButtonBQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonCQuestion3Objects1.length = 0;
gdjs.Materi1Code.GDButtonCQuestion3Objects2.length = 0;
gdjs.Materi1Code.GDButtonCQuestion3Objects3.length = 0;
gdjs.Materi1Code.GDButtonEffectAObjects1.length = 0;
gdjs.Materi1Code.GDButtonEffectAObjects2.length = 0;
gdjs.Materi1Code.GDButtonEffectAObjects3.length = 0;
gdjs.Materi1Code.GDButtonEffectBObjects1.length = 0;
gdjs.Materi1Code.GDButtonEffectBObjects2.length = 0;
gdjs.Materi1Code.GDButtonEffectBObjects3.length = 0;
gdjs.Materi1Code.GDButtonEffectCObjects1.length = 0;
gdjs.Materi1Code.GDButtonEffectCObjects2.length = 0;
gdjs.Materi1Code.GDButtonEffectCObjects3.length = 0;


return;

}

gdjs['Materi1Code'] = gdjs.Materi1Code;
