gdjs.Gameplay2Code = {};
gdjs.Gameplay2Code.localVariables = [];
gdjs.Gameplay2Code.idToCallbackMap = new Map();
gdjs.Gameplay2Code.forEachIndex2 = 0;

gdjs.Gameplay2Code.forEachIndex3 = 0;

gdjs.Gameplay2Code.forEachObjects2 = [];

gdjs.Gameplay2Code.forEachObjects3 = [];

gdjs.Gameplay2Code.forEachTemporary2 = null;

gdjs.Gameplay2Code.forEachTemporary3 = null;

gdjs.Gameplay2Code.forEachTotalCount2 = 0;

gdjs.Gameplay2Code.forEachTotalCount3 = 0;

gdjs.Gameplay2Code.GDMCObjects1= [];
gdjs.Gameplay2Code.GDMCObjects2= [];
gdjs.Gameplay2Code.GDMCObjects3= [];
gdjs.Gameplay2Code.GDMCObjects4= [];
gdjs.Gameplay2Code.GDMCObjects5= [];
gdjs.Gameplay2Code.GDMCObjects6= [];
gdjs.Gameplay2Code.GDEnemyObjects1= [];
gdjs.Gameplay2Code.GDEnemyObjects2= [];
gdjs.Gameplay2Code.GDEnemyObjects3= [];
gdjs.Gameplay2Code.GDEnemyObjects4= [];
gdjs.Gameplay2Code.GDEnemyObjects5= [];
gdjs.Gameplay2Code.GDEnemyObjects6= [];
gdjs.Gameplay2Code.GDCoinObjects1= [];
gdjs.Gameplay2Code.GDCoinObjects2= [];
gdjs.Gameplay2Code.GDCoinObjects3= [];
gdjs.Gameplay2Code.GDCoinObjects4= [];
gdjs.Gameplay2Code.GDCoinObjects5= [];
gdjs.Gameplay2Code.GDCoinObjects6= [];
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1= [];
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2= [];
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects3= [];
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects4= [];
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects5= [];
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects6= [];
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects1= [];
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects2= [];
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects3= [];
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects4= [];
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects5= [];
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects6= [];
gdjs.Gameplay2Code.GDTilesObjects1= [];
gdjs.Gameplay2Code.GDTilesObjects2= [];
gdjs.Gameplay2Code.GDTilesObjects3= [];
gdjs.Gameplay2Code.GDTilesObjects4= [];
gdjs.Gameplay2Code.GDTilesObjects5= [];
gdjs.Gameplay2Code.GDTilesObjects6= [];
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1= [];
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects2= [];
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects3= [];
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects4= [];
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects5= [];
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects6= [];
gdjs.Gameplay2Code.GDTiles2Objects1= [];
gdjs.Gameplay2Code.GDTiles2Objects2= [];
gdjs.Gameplay2Code.GDTiles2Objects3= [];
gdjs.Gameplay2Code.GDTiles2Objects4= [];
gdjs.Gameplay2Code.GDTiles2Objects5= [];
gdjs.Gameplay2Code.GDTiles2Objects6= [];
gdjs.Gameplay2Code.GDBulletObjects1= [];
gdjs.Gameplay2Code.GDBulletObjects2= [];
gdjs.Gameplay2Code.GDBulletObjects3= [];
gdjs.Gameplay2Code.GDBulletObjects4= [];
gdjs.Gameplay2Code.GDBulletObjects5= [];
gdjs.Gameplay2Code.GDBulletObjects6= [];
gdjs.Gameplay2Code.GDCoinTextObjects1= [];
gdjs.Gameplay2Code.GDCoinTextObjects2= [];
gdjs.Gameplay2Code.GDCoinTextObjects3= [];
gdjs.Gameplay2Code.GDCoinTextObjects4= [];
gdjs.Gameplay2Code.GDCoinTextObjects5= [];
gdjs.Gameplay2Code.GDCoinTextObjects6= [];
gdjs.Gameplay2Code.GDAmmoTextObjects1= [];
gdjs.Gameplay2Code.GDAmmoTextObjects2= [];
gdjs.Gameplay2Code.GDAmmoTextObjects3= [];
gdjs.Gameplay2Code.GDAmmoTextObjects4= [];
gdjs.Gameplay2Code.GDAmmoTextObjects5= [];
gdjs.Gameplay2Code.GDAmmoTextObjects6= [];
gdjs.Gameplay2Code.GDTokenTextObjects1= [];
gdjs.Gameplay2Code.GDTokenTextObjects2= [];
gdjs.Gameplay2Code.GDTokenTextObjects3= [];
gdjs.Gameplay2Code.GDTokenTextObjects4= [];
gdjs.Gameplay2Code.GDTokenTextObjects5= [];
gdjs.Gameplay2Code.GDTokenTextObjects6= [];
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects1= [];
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects2= [];
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects3= [];
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects4= [];
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects5= [];
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects6= [];
gdjs.Gameplay2Code.GDBackgroundObjects1= [];
gdjs.Gameplay2Code.GDBackgroundObjects2= [];
gdjs.Gameplay2Code.GDBackgroundObjects3= [];
gdjs.Gameplay2Code.GDBackgroundObjects4= [];
gdjs.Gameplay2Code.GDBackgroundObjects5= [];
gdjs.Gameplay2Code.GDBackgroundObjects6= [];


gdjs.Gameplay2Code.eventsList0 = function(runtimeScene) {

};gdjs.Gameplay2Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Gameplay2Code.GDEnemyObjects1 */

for (gdjs.Gameplay2Code.forEachIndex2 = 0;gdjs.Gameplay2Code.forEachIndex2 < gdjs.Gameplay2Code.GDEnemyObjects1.length;++gdjs.Gameplay2Code.forEachIndex2) {
gdjs.Gameplay2Code.GDEnemyObjects2.length = 0;


gdjs.Gameplay2Code.forEachTemporary2 = gdjs.Gameplay2Code.GDEnemyObjects1[gdjs.Gameplay2Code.forEachIndex2];
gdjs.Gameplay2Code.GDEnemyObjects2.push(gdjs.Gameplay2Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariables().getFromIndex(2)).setNumber((gdjs.Gameplay2Code.GDEnemyObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].resetTimer("atk");
}
}
}
}

}


};gdjs.Gameplay2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoText"), gdjs.Gameplay2Code.GDAmmoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Gameplay2Code.GDCoinTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indikator_Nyawa"), gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("TokenText"), gdjs.Gameplay2Code.GDTokenTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 1));
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects1[i].getVariables().getFromIndex(2)).setNumber(150);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects1[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects1[i].getVariables().getFromIndex(4)).setNumber(50);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects1[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects1[i].resetTimer("atk");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].resetTimer("shoot");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].resetTimer("hit");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1[i].SetValue(3, null);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDCoinTextObjects1[i].getBehavior("Text").setText("Coin: 0");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDAmmoTextObjects1[i].getBehavior("Text").setText("Ammo: 10");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDTokenTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDTokenTextObjects1[i].getBehavior("Text").setText("Token: 0/1");
}
}

{ //Subevents
gdjs.Gameplay2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Gameplay2Code.GDBulletObjects1});
gdjs.Gameplay2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects1.length;i<l;++i) {
    if ( !(gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects1[k] = gdjs.Gameplay2Code.GDMCObjects1[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoText"), gdjs.Gameplay2Code.GDAmmoTextObjects1);
/* Reuse gdjs.Gameplay2Code.GDMCObjects1 */
gdjs.Gameplay2Code.GDBulletObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects1Objects, (( gdjs.Gameplay2Code.GDMCObjects1.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects1[0].getCenterXInScene()), (( gdjs.Gameplay2Code.GDMCObjects1.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDBulletObjects1[i].addForce(700, 0, 1);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].resetTimer("shoot");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("Animation").setAnimationName("shoot");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDAmmoTextObjects1[i].getBehavior("Text").setText("Ammo: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
}

}


};gdjs.Gameplay2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "j");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "f");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17368132);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Gameplay2Code.GDBulletObjects1});
gdjs.Gameplay2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects1.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects1[k] = gdjs.Gameplay2Code.GDMCObjects1[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoText"), gdjs.Gameplay2Code.GDAmmoTextObjects1);
/* Reuse gdjs.Gameplay2Code.GDMCObjects1 */
gdjs.Gameplay2Code.GDBulletObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects1Objects, (( gdjs.Gameplay2Code.GDMCObjects1.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects1[0].getCenterXInScene()), (( gdjs.Gameplay2Code.GDMCObjects1.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDBulletObjects1[i].addForce(-700, 0, 1);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].resetTimer("shoot");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("Animation").setAnimationName("shoot");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDAmmoTextObjects1[i].getBehavior("Text").setText("Ammo: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
}

}


};gdjs.Gameplay2Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "j");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "f");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17373444);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Gameplay2Code.GDBulletObjects2});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDTilesObjects2Objects = Hashtable.newFrom({"Tiles": gdjs.Gameplay2Code.GDTilesObjects2});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Gameplay2Code.GDBulletObjects1});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDTiles2Objects1Objects = Hashtable.newFrom({"Tiles2": gdjs.Gameplay2Code.GDTiles2Objects1});
gdjs.Gameplay2Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Gameplay2Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.Gameplay2Code.GDTilesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects2Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDTilesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDBulletObjects2 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Gameplay2Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tiles2"), gdjs.Gameplay2Code.GDTiles2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects1Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDTiles2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Gameplay2Code.GDBulletObjects2});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Gameplay2Code.GDEnemyObjects2});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Gameplay2Code.GDEnemyObjects2});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GD_95959595Token_95959595_95959595TransmissionObjects2Objects = Hashtable.newFrom({"_Token__Transmission": gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects2});
gdjs.Gameplay2Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects2Objects) == 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects2 */
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GD_95959595Token_95959595_95959595TransmissionObjects2Objects, (( gdjs.Gameplay2Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects2[0].getCenterXInScene()), (( gdjs.Gameplay2Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects2[0].getCenterYInScene()), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


};gdjs.Gameplay2Code.eventsList12 = function(runtimeScene) {

{

/* Reuse gdjs.Gameplay2Code.GDEnemyObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariables().getFromIndex(4)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects2[k] = gdjs.Gameplay2Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion 1.aac", false, 90, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].getBehavior("Animation").setAnimationName("dead");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].resetTimer("dead");
}
}

{ //Subevents
gdjs.Gameplay2Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Gameplay2Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDBulletObjects2Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDBulletObjects2 */
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_hurt.ogg", false, 90, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariables().getFromIndex(4)).sub(10);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Gameplay2Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects1[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects1[i].getVariables().getFromIndex(4)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects1[k] = gdjs.Gameplay2Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects1[i].getTimerElapsedTimeInSecondsOrNaN("dead") > 0.6 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects1[k] = gdjs.Gameplay2Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Gameplay2Code.eventsList14 = function(runtimeScene) {

};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Gameplay2Code.GDEnemyObjects1});
gdjs.Gameplay2Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects2);

for (gdjs.Gameplay2Code.forEachIndex3 = 0;gdjs.Gameplay2Code.forEachIndex3 < gdjs.Gameplay2Code.GDEnemyObjects2.length;++gdjs.Gameplay2Code.forEachIndex3) {
gdjs.Gameplay2Code.GDEnemyObjects3.length = 0;


gdjs.Gameplay2Code.forEachTemporary3 = gdjs.Gameplay2Code.GDEnemyObjects2[gdjs.Gameplay2Code.forEachIndex3];
gdjs.Gameplay2Code.GDEnemyObjects3.push(gdjs.Gameplay2Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects3[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects3[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects3[k] = gdjs.Gameplay2Code.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects3[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects1[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects1[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects1[k] = gdjs.Gameplay2Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects1Objects, (( gdjs.Gameplay2Code.GDMCObjects1.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects1[0].getPointX("")), (( gdjs.Gameplay2Code.GDMCObjects1.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects1[0].getPointY("")), false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects1[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
}

}


};gdjs.Gameplay2Code.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects4Objects = Hashtable.newFrom({"Enemy": gdjs.Gameplay2Code.GDEnemyObjects4});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects4Objects = Hashtable.newFrom({"MC": gdjs.Gameplay2Code.GDMCObjects4});
gdjs.Gameplay2Code.eventsList17 = function(runtimeScene) {

{

/* Reuse gdjs.Gameplay2Code.GDEnemyObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects4[i].getTimerElapsedTimeInSecondsOrNaN("atk") > 0.8 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects4[k] = gdjs.Gameplay2Code.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects4 */
gdjs.copyArray(runtimeScene.getObjects("Indikator_Nyawa"), gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects4);
/* Reuse gdjs.Gameplay2Code.GDMCObjects4 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_hurt.ogg", false, 90, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].resetTimer("atk");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects4[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects4[i].getVariables().getFromIndex(2)).sub(25);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects4[i].SetValue(Math.min(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(), Math.ceil(((gdjs.Gameplay2Code.GDMCObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Gameplay2Code.GDMCObjects4[0].getVariables()).getFromIndex(2).getAsNumber() / 50)), null);
}
}
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects4Objects = Hashtable.newFrom({"Enemy": gdjs.Gameplay2Code.GDEnemyObjects4});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects4Objects = Hashtable.newFrom({"MC": gdjs.Gameplay2Code.GDMCObjects4});
gdjs.Gameplay2Code.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Gameplay2Code.GDEnemyObjects4, gdjs.Gameplay2Code.GDEnemyObjects5);

gdjs.copyArray(gdjs.Gameplay2Code.GDMCObjects4, gdjs.Gameplay2Code.GDMCObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Gameplay2Code.GDEnemyObjects5.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects5[0].getCenterXInScene()) < (( gdjs.Gameplay2Code.GDMCObjects5.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects5[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects5 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


{

/* Reuse gdjs.Gameplay2Code.GDEnemyObjects4 */
/* Reuse gdjs.Gameplay2Code.GDMCObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Gameplay2Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects4[0].getCenterXInScene()) > (( gdjs.Gameplay2Code.GDMCObjects4.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects4[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects4 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


};gdjs.Gameplay2Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Gameplay2Code.GDEnemyObjects3, gdjs.Gameplay2Code.GDEnemyObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Gameplay2Code.GDEnemyObjects5.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects5[0].getPointX("")) > ((gdjs.Gameplay2Code.GDEnemyObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Gameplay2Code.GDEnemyObjects5[0].getVariables()).getFromIndex(2).getAsNumber() + 200);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects5 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects5[i].getVariables().getFromIndex(1)).setNumber(-1);
}
}
}

}


{

gdjs.copyArray(gdjs.Gameplay2Code.GDEnemyObjects3, gdjs.Gameplay2Code.GDEnemyObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Gameplay2Code.GDEnemyObjects5.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects5[0].getPointX("")) < ((gdjs.Gameplay2Code.GDEnemyObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Gameplay2Code.GDEnemyObjects5[0].getVariables()).getFromIndex(2).getAsNumber() - 200);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects5 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].returnVariable(gdjs.Gameplay2Code.GDEnemyObjects5[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(gdjs.Gameplay2Code.GDEnemyObjects3, gdjs.Gameplay2Code.GDEnemyObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects5.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects5[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects5[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects5[k] = gdjs.Gameplay2Code.GDEnemyObjects5[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects5 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects5[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


{

gdjs.copyArray(gdjs.Gameplay2Code.GDEnemyObjects3, gdjs.Gameplay2Code.GDEnemyObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects4[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects4[i].getVariables().getFromIndex(1)) == -1 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects4[k] = gdjs.Gameplay2Code.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects4 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


};gdjs.Gameplay2Code.eventsList20 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.Gameplay2Code.GDEnemyObjects3, gdjs.Gameplay2Code.GDEnemyObjects4);

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects4);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects4Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects4Objects, 70, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.Gameplay2Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects4[0].getCenterYInScene()) - (( gdjs.Gameplay2Code.GDMCObjects4.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects4[0].getCenterYInScene())) < 120);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDEnemyObjects4 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects4[i].getBehavior("Animation").setAnimationName("attack");
}
}

{ //Subevents
gdjs.Gameplay2Code.eventsList17(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(gdjs.Gameplay2Code.GDEnemyObjects3, gdjs.Gameplay2Code.GDEnemyObjects4);

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects4);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects4[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects4[k] = gdjs.Gameplay2Code.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects4Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects4Objects, 800, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.Gameplay2Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDEnemyObjects4[0].getCenterYInScene()) - (( gdjs.Gameplay2Code.GDMCObjects4.length === 0 ) ? 0 :gdjs.Gameplay2Code.GDMCObjects4[0].getCenterYInScene())) < 250);
}
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList18(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {

{ //Subevents
gdjs.Gameplay2Code.eventsList19(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Gameplay2Code.eventsList21 = function(runtimeScene) {

};gdjs.Gameplay2Code.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects2);

for (gdjs.Gameplay2Code.forEachIndex3 = 0;gdjs.Gameplay2Code.forEachIndex3 < gdjs.Gameplay2Code.GDEnemyObjects2.length;++gdjs.Gameplay2Code.forEachIndex3) {
gdjs.Gameplay2Code.GDEnemyObjects3.length = 0;


gdjs.Gameplay2Code.forEachTemporary3 = gdjs.Gameplay2Code.GDEnemyObjects2[gdjs.Gameplay2Code.forEachIndex3];
gdjs.Gameplay2Code.GDEnemyObjects3.push(gdjs.Gameplay2Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects3[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects3[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects3[k] = gdjs.Gameplay2Code.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Gameplay2Code.eventsList20(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects1);

for (gdjs.Gameplay2Code.forEachIndex2 = 0;gdjs.Gameplay2Code.forEachIndex2 < gdjs.Gameplay2Code.GDEnemyObjects1.length;++gdjs.Gameplay2Code.forEachIndex2) {
gdjs.Gameplay2Code.GDEnemyObjects2.length = 0;


gdjs.Gameplay2Code.forEachTemporary2 = gdjs.Gameplay2Code.GDEnemyObjects1[gdjs.Gameplay2Code.forEachIndex2];
gdjs.Gameplay2Code.GDEnemyObjects2.push(gdjs.Gameplay2Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects2[k] = gdjs.Gameplay2Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Gameplay2Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDEnemyObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}
}
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects2Objects = Hashtable.newFrom({"MC": gdjs.Gameplay2Code.GDMCObjects2});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Gameplay2Code.GDEnemyObjects2});
gdjs.Gameplay2Code.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Gameplay2Code.GDEnemyObjects2);
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects2Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Gameplay2Code.GDEnemyObjects2[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDEnemyObjects2[k] = gdjs.Gameplay2Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDEnemyObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indikator_Nyawa"), gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2);
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_hurt.ogg", false, 90, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].resetTimer("hit");
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects2[i].getVariables().getFromIndex(2)).sub(10);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2[i].SetValue(Math.min(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(), Math.ceil(((gdjs.Gameplay2Code.GDMCObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Gameplay2Code.GDMCObjects2[0].getVariables()).getFromIndex(2).getAsNumber() / 50)), null);
}
}
}

}


};gdjs.Gameplay2Code.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects2[i].getTimerElapsedTimeInSecondsOrNaN("hit") > 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects2[k] = gdjs.Gameplay2Code.GDMCObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects2[i].getVariableNumber(gdjs.Gameplay2Code.GDMCObjects2[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects2[k] = gdjs.Gameplay2Code.GDMCObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indikator_Nyawa"), gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2);
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects2[i].getVariables().getFromIndex(2)).setNumber(150);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].setPosition(3,510);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects2[i].getVariableNumber(gdjs.Gameplay2Code.GDMCObjects2[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects2[k] = gdjs.Gameplay2Code.GDMCObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("dead");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 2.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("Animation").setAnimationName("dead");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "die");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "dead");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "die") > 1.5;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loser", false);
}
}

}


};gdjs.Gameplay2Code.eventsList25 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects2[i].getTimerElapsedTimeInSecondsOrNaN("shoot") < 0.35 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects2[k] = gdjs.Gameplay2Code.GDMCObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("Animation").setAnimationName("shoot");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects2[k] = gdjs.Gameplay2Code.GDMCObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects2.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("Animation").setAnimationName("walk");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Gameplay2Code.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Gameplay2Code.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects1Objects = Hashtable.newFrom({"MC": gdjs.Gameplay2Code.GDMCObjects1});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Gameplay2Code.GDCoinObjects1});
gdjs.Gameplay2Code.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Gameplay2Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects1Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Gameplay2Code.GDCoinTextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_coin.ogg", false, 100, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(8).add(5);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDCoinTextObjects1[i].getBehavior("Text").setText("Coin: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()));
}
}
}

}


};gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects1Objects = Hashtable.newFrom({"MC": gdjs.Gameplay2Code.GDMCObjects1});
gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GD_95959595Token_95959595_95959595TransmissionObjects1Objects = Hashtable.newFrom({"_Token__Transmission": gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1});
gdjs.Gameplay2Code.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("_Token__Transmission"), gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GDMCObjects1Objects, gdjs.Gameplay2Code.mapOfGDgdjs_9546Gameplay2Code_9546GD_95959595Token_95959595_95959595TransmissionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TokenText"), gdjs.Gameplay2Code.GDTokenTextObjects1);
/* Reuse gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_05.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDTokenTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDTokenTextObjects1[i].getBehavior("Text").setText("Token: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()) + "/1");
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Materi2", false);
}
}

}


};gdjs.Gameplay2Code.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 2.aac", false, 80, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(((gdjs.Gameplay2Code.GDMCObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Gameplay2Code.GDMCObjects1[0].getVariables()).getFromIndex(2).getAsNumber());
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Shop");
}
}

}


};gdjs.Gameplay2Code.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoText"), gdjs.Gameplay2Code.GDAmmoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Gameplay2Code.GDCoinTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indikator_Nyawa"), gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);
gdjs.copyArray(runtimeScene.getObjects("TokenText"), gdjs.Gameplay2Code.GDTokenTextObjects1);
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects1[i].getVariables().getFromIndex(2)).setNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDCoinTextObjects1[i].getBehavior("Text").setText("Coin: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDAmmoTextObjects1[i].getBehavior("Text").setText("Ammo: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDTokenTextObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDTokenTextObjects1[i].getBehavior("Text").setText("Token: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()) + "/1");
}
}
}

}


};gdjs.Gameplay2Code.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects2[k] = gdjs.Gameplay2Code.GDMCObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects2.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects2[k] = gdjs.Gameplay2Code.GDMCObjects2[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDMCObjects2 */
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects2.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MC"), gdjs.Gameplay2Code.GDMCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects1.length;i<l;++i) {
    if ( !(gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects1[k] = gdjs.Gameplay2Code.GDMCObjects1[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameplay2Code.GDMCObjects1.length;i<l;++i) {
    if ( gdjs.Gameplay2Code.GDMCObjects1[i].getVariableNumber(gdjs.Gameplay2Code.GDMCObjects1[i].getVariables().getFromIndex(0)) < 2 ) {
        isConditionTrue_0 = true;
        gdjs.Gameplay2Code.GDMCObjects1[k] = gdjs.Gameplay2Code.GDMCObjects1[i];
        ++k;
    }
}
gdjs.Gameplay2Code.GDMCObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Gameplay2Code.GDMCObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump 1.aac", false, 80, 1);
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.Gameplay2Code.GDMCObjects1.length ;i < len;++i) {
    gdjs.Gameplay2Code.GDMCObjects1[i].returnVariable(gdjs.Gameplay2Code.GDMCObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
}

}


};gdjs.Gameplay2Code.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, -32, -544, 3136, 800, "", 0);
}
}

}


};gdjs.Gameplay2Code.eventsList33 = function(runtimeScene) {

{


gdjs.Gameplay2Code.eventsList2(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList3(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList6(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList9(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList10(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList13(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList16(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList22(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList24(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList26(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList27(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList28(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList29(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList30(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList31(runtimeScene);
}


{


gdjs.Gameplay2Code.eventsList32(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "play");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "j");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "f");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17424724);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Laser-weapon 10.aac", false, 80, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Theme 2.aac", true, 50, 1);
}
}

}


};

gdjs.Gameplay2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameplay2Code.GDMCObjects1.length = 0;
gdjs.Gameplay2Code.GDMCObjects2.length = 0;
gdjs.Gameplay2Code.GDMCObjects3.length = 0;
gdjs.Gameplay2Code.GDMCObjects4.length = 0;
gdjs.Gameplay2Code.GDMCObjects5.length = 0;
gdjs.Gameplay2Code.GDMCObjects6.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects1.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects2.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects3.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects4.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects5.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects6.length = 0;
gdjs.Gameplay2Code.GDCoinObjects1.length = 0;
gdjs.Gameplay2Code.GDCoinObjects2.length = 0;
gdjs.Gameplay2Code.GDCoinObjects3.length = 0;
gdjs.Gameplay2Code.GDCoinObjects4.length = 0;
gdjs.Gameplay2Code.GDCoinObjects5.length = 0;
gdjs.Gameplay2Code.GDCoinObjects6.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects3.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects4.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects5.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects6.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects1.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects2.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects3.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects4.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects5.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects6.length = 0;
gdjs.Gameplay2Code.GDTilesObjects1.length = 0;
gdjs.Gameplay2Code.GDTilesObjects2.length = 0;
gdjs.Gameplay2Code.GDTilesObjects3.length = 0;
gdjs.Gameplay2Code.GDTilesObjects4.length = 0;
gdjs.Gameplay2Code.GDTilesObjects5.length = 0;
gdjs.Gameplay2Code.GDTilesObjects6.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects2.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects3.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects4.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects5.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects6.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects1.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects2.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects3.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects4.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects5.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects6.length = 0;
gdjs.Gameplay2Code.GDBulletObjects1.length = 0;
gdjs.Gameplay2Code.GDBulletObjects2.length = 0;
gdjs.Gameplay2Code.GDBulletObjects3.length = 0;
gdjs.Gameplay2Code.GDBulletObjects4.length = 0;
gdjs.Gameplay2Code.GDBulletObjects5.length = 0;
gdjs.Gameplay2Code.GDBulletObjects6.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects1.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects2.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects3.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects4.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects5.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects6.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects1.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects2.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects3.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects4.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects5.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects6.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects1.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects2.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects3.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects4.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects5.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects6.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects1.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects2.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects3.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects4.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects5.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects6.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects1.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects2.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects3.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects4.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects5.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects6.length = 0;

gdjs.Gameplay2Code.eventsList33(runtimeScene);
gdjs.Gameplay2Code.GDMCObjects1.length = 0;
gdjs.Gameplay2Code.GDMCObjects2.length = 0;
gdjs.Gameplay2Code.GDMCObjects3.length = 0;
gdjs.Gameplay2Code.GDMCObjects4.length = 0;
gdjs.Gameplay2Code.GDMCObjects5.length = 0;
gdjs.Gameplay2Code.GDMCObjects6.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects1.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects2.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects3.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects4.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects5.length = 0;
gdjs.Gameplay2Code.GDEnemyObjects6.length = 0;
gdjs.Gameplay2Code.GDCoinObjects1.length = 0;
gdjs.Gameplay2Code.GDCoinObjects2.length = 0;
gdjs.Gameplay2Code.GDCoinObjects3.length = 0;
gdjs.Gameplay2Code.GDCoinObjects4.length = 0;
gdjs.Gameplay2Code.GDCoinObjects5.length = 0;
gdjs.Gameplay2Code.GDCoinObjects6.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects1.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects2.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects3.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects4.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects5.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595NyawaObjects6.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects1.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects2.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects3.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects4.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects5.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595AmmoObjects6.length = 0;
gdjs.Gameplay2Code.GDTilesObjects1.length = 0;
gdjs.Gameplay2Code.GDTilesObjects2.length = 0;
gdjs.Gameplay2Code.GDTilesObjects3.length = 0;
gdjs.Gameplay2Code.GDTilesObjects4.length = 0;
gdjs.Gameplay2Code.GDTilesObjects5.length = 0;
gdjs.Gameplay2Code.GDTilesObjects6.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects1.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects2.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects3.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects4.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects5.length = 0;
gdjs.Gameplay2Code.GD_9595Token_9595_9595TransmissionObjects6.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects1.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects2.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects3.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects4.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects5.length = 0;
gdjs.Gameplay2Code.GDTiles2Objects6.length = 0;
gdjs.Gameplay2Code.GDBulletObjects1.length = 0;
gdjs.Gameplay2Code.GDBulletObjects2.length = 0;
gdjs.Gameplay2Code.GDBulletObjects3.length = 0;
gdjs.Gameplay2Code.GDBulletObjects4.length = 0;
gdjs.Gameplay2Code.GDBulletObjects5.length = 0;
gdjs.Gameplay2Code.GDBulletObjects6.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects1.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects2.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects3.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects4.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects5.length = 0;
gdjs.Gameplay2Code.GDCoinTextObjects6.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects1.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects2.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects3.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects4.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects5.length = 0;
gdjs.Gameplay2Code.GDAmmoTextObjects6.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects1.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects2.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects3.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects4.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects5.length = 0;
gdjs.Gameplay2Code.GDTokenTextObjects6.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects1.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects2.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects3.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects4.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects5.length = 0;
gdjs.Gameplay2Code.GDIndikator_9595CoinObjects6.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects1.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects2.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects3.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects4.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects5.length = 0;
gdjs.Gameplay2Code.GDBackgroundObjects6.length = 0;


return;

}

gdjs['Gameplay2Code'] = gdjs.Gameplay2Code;
