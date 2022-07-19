const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork(activity);

function saturdayFun(activity = "roller-skate") {

    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function wrapAdjective(asterick) {
    return function (param = "special") {
        return `You are ${asterick}${param}${asterick}!`;
    }
}