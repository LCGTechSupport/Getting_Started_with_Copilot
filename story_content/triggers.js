function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OmIsZ00iv6":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5ehZ36DLacF');
const duration = 1250;
const easing = 'ease-in-out';
const id = '5xjPkKo3O6z';
const growAmount = 0.2;
const delay = 31000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
