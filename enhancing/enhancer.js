module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const enhancement = item.enhancement;
  const attackPower = item.attackPower
  if (attackPower > 50) {
    return {...item, enhancement: enhancement + 10};
  }
  return { ...item, enhancement: enhancement };
}

function fail(item) {
  const attackPower = item.attackPower;
  const enhancement = item.enhancement;
  if(attackPower < 20) {
    return { ...item, enhancement: enhancement - 1}
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
