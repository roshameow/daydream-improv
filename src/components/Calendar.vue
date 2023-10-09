<template>
  <div class="calendar">
    <div class="header">
      <span class="month">{{ englishMonth[month] }}</span>
      <span class="year">{{ year }}</span>
      <button @click="prevMonth">&lt;</button>
      <button @click="returnCurrentMonth">today</button>
      <button @click="nextMonth">&gt;</button>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in calendar" :key="index">
          <td
            v-for="day_object in week"
            :key="day_object"
            :class="{
              today: isToday(day_object),
              hide: notThisMonth(day_object),
              hovereffect: !notThisMonth(day_object),
              active: isSelectedDay(day_object),

            }"
            @click="selectDate(day_object)"
          >
            {{ day_object.day > 0 ? day_object.day : "" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      englishMonth: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      calendar: [],
      month: new Date().getMonth(),
      today: new Date().getDate(),
      year: new Date().getFullYear(),
      selectedDate: new Date(),
    };
  },
  computed: {
    currentDate() {
      return new Date(this.year, this.month, 1);
    },
  },
  mounted() {
    this.populateCalendar();
  },
  methods: {
    populateCalendar() {
      this.calendar = [];
      const firstDay = new Date(this.year, this.month, 1).getDay();
      const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
      const daysInLastMonth = new Date(this.year, this.month, 0).getDate();

      let day = daysInLastMonth - firstDay + 1;
      let isInCurrentMonth = false;
      for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          if (
            (i == 0 && day == daysInLastMonth + 1) ||
            (i > 0 && day == daysInMonth + 1)
          ) {
            day = 1;
            isInCurrentMonth = !isInCurrentMonth;
          }
          week.push({
            day: day,
            isInCurrentMonth: isInCurrentMonth,
          });
          day++;
        }
        this.calendar.push(week);
      }
    },
    prevMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
      this.populateCalendar();
    },
    nextMonth() {
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
      this.populateCalendar();
    },
    returnCurrentMonth() {
      this.month = new Date().getMonth();
      this.year = new Date().getFullYear();
      const today = new Date();
      this.selectedDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      this.populateCalendar();
    },
    isToday(day_object) {
      const today = new Date();
      return (
        this.year === today.getFullYear() &&
        this.month === today.getMonth() &&
        day_object.day === today.getDate() &&
        day_object.isInCurrentMonth === true
      );
    },
    notThisMonth(day_object) {
      return day_object.isInCurrentMonth === false;
    },
    isSelectedDay(day_object) {
      const selectedDate = new Date(this.year, this.month, day_object.day);
      return (
        day_object.isInCurrentMonth &&
        this.selectedDate &&
        selectedDate.getTime() === this.selectedDate.getTime()
      );
    },
    selectDate(day_object) {
      if (day_object.isInCurrentMonth) {
        this.selectedDate = new Date(this.year, this.month, day_object.day);
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles for the calendar */
.calendar {
  font-family: Arial, sans-serif;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 28px;
}
.month {
  font-weight: bold; /* Optionally, make the month text bold */
  margin-right: -30px; /* Add margin to separate the month and year */
}
.year {
  color: #2196f3;
  font-weight: bold; /* Optionally, make the month text bold */
}

.header button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

table {
  width: 100%;
}

table th {
  padding: 10px;
}

table td {
  padding: 15px;
  cursor: pointer;
}

table td.today {
  color: #2196f3;
}

table td.hide {
  color: #cccccc;
}

table td.hovereffect:hover {
  background-color: lightblue; /* Change background color on hover */
  border-radius: 15px; /* Adjust the border-radius to control the roundness of corners */
}

table td.active {
  background-color: #2196f3;
  border-radius: 15px; /* Adjust the border-radius to control the roundness of corners */
  color: #fff;
}
</style>
