const returnWeekDay = (d) => {
    let day;
    const date = new Date(d);
    switch (date.getDay()) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        default:
            day = "Sat";
    }
    return day
}

export default returnWeekDay;