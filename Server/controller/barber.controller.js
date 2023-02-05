const getBarber = async (req, res) => {
  res.send(JSON.stringify({ msg: 'Hey Barber' }));
};

const getBarberSchedule = async (req, res) => {
    res.send(JSON.stringify({ msg: 'Hey getBarberSchedule' }));
  };

module.exports = {
  getBarber,
  getBarberSchedule
};
