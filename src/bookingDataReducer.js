export const bookingDataInitialState = {
    name: {value:'', valid: true},
    email: {value: '', valid: true},
    date: {value: '', valid: true},
    time: {value: '', valid: true},
    occasion: {value: '', valid: true},
    diners: '1',
    seating: 'inside',
    comment: '',
    submitDisabled: true
};

export const bookingDataReducer = (bookingData, action) => {
    switch (action.type) {
        case 'nameBlur': {
            const newSubmitDisabled =
                    !bookingData.email.valid || bookingData.email.value==="" ||
                    !bookingData.date.valid || bookingData.date.value==="" ||
                    !bookingData.time.valid || bookingData.time.value==="--:--" ||
                    !bookingData.occasion.valid || bookingData.occasion.value==="-" ||
                    action.value==="";
            return({
                ...bookingData,
                name: {value: action.value, valid: action.value!==""},
                submitDisabled: newSubmitDisabled
            });
        }
        case 'nameChange': {
            const prevValid = bookingData.name.valid;
            if(!prevValid) {
                const newSubmitDisabled =
                    !bookingData.email.valid || bookingData.email.value==="" ||
                    !bookingData.date.valid || bookingData.date.value==="" ||
                    !bookingData.time.valid || bookingData.time.value==="--:--" ||
                    !bookingData.occasion.valid || bookingData.occasion.value==="-" ||
                    action.value==="";
                return({
                    ...bookingData,
                    name: {value: action.value, valid: action.value!==""},
                    submitDisabled: newSubmitDisabled
                });
            }
            return({
                ...bookingData,
                name: {value: action.value, valid: prevValid}
            });
        }
        case 'emailBlur': {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const newSubmitDisabled =
                bookingData.name==="" ||
                !bookingData.date.valid || bookingData.date.value==="" ||
                !bookingData.time.valid || bookingData.time.value==="--:--" ||
                !bookingData.occasion.valid || bookingData.occasion.value==="-" ||
                !emailPattern.test(action.value);
            return({
                ...bookingData,
                email: {value: action.value, valid: emailPattern.test(action.value)},
                submitDisabled: newSubmitDisabled
            });
        }
        case 'emailChange': {
            const prevValid = bookingData.email.valid;
            if(!prevValid) {
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const newSubmitDisabled =
                bookingData.name==="" ||
                !bookingData.date.valid || bookingData.date.value==="" ||
                !bookingData.time.valid || bookingData.time.value==="--:--" ||
                !bookingData.occasion.valid || bookingData.occasion.value==="-" ||
                !emailPattern.test(action.value);
                return({
                    ...bookingData,
                    email: {value: action.value, valid: emailPattern.test(action.value)},
                    submitDisabled: newSubmitDisabled
                });
            }
            return({
                ...bookingData,
                email: {value: action.value, valid: prevValid}
            });
        }
        case 'dateBlur': {
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            const [year, month, day] = action.value.split("-");
            const inputDate = new Date(year, month - 1, day);
            inputDate.setHours(0, 0, 0, 0);
            const newSubmitDisabled =
                bookingData.name==="" ||
                !bookingData.email.valid || bookingData.email.value==="" ||
                !bookingData.time.valid || bookingData.time.value==="--:--" ||
                !bookingData.occasion.valid || bookingData.occasion.value==="-" ||
                action.value==="" || inputDate < currentDate;
            return({
                ...bookingData,
                date: {value: action.value, valid: action.value!=="" && inputDate>=currentDate},
                submitDisabled: newSubmitDisabled
            });
        }
        case 'dateChange': {
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            const [year, month, day] = action.value.split("-");
            const inputDate = new Date(year, month - 1, day);
            inputDate.setHours(0, 0, 0, 0);
            const prevValid = bookingData.date.valid;
            if(!prevValid) {
                const newSubmitDisabled =
                bookingData.name==="" ||
                !bookingData.email.valid || bookingData.email.value==="" ||
                !bookingData.time.valid || bookingData.time.value==="--:--" ||
                !bookingData.occasion.valid || bookingData.occasion.value==="-" ||
                action.value==="" || inputDate < currentDate;
                return({
                    ...bookingData,
                    date: {value: action.value, valid: action.value!=="" && inputDate>=currentDate},
                    submitDisabled: newSubmitDisabled
                });
            }
            return({
                ...bookingData,
                date: {value: action.value, valid: prevValid}
            });
        }
        case 'timeBlur':
        case 'timeChange': {
            const newSubmitDisabled =
                bookingData.name==="" ||
                !bookingData.email.valid || bookingData.email.value==="" ||
                !bookingData.date.valid || bookingData.date.value==="" ||
                !bookingData.occasion.valid || bookingData.occasion.value==="-" ||
                action.value==="--:--";
            return({
                ...bookingData,
                time: {value: action.value, valid: action.value!=="--:--"},
                submitDisabled: newSubmitDisabled
            });
        }
        case 'occasionBlur':
        case 'occasionChange': {
            const newSubmitDisabled =
                bookingData.name==="" ||
                !bookingData.email.valid || bookingData.email.value==="" ||
                !bookingData.date.valid || bookingData.date.value==="" ||
                !bookingData.time.valid || bookingData.time.value==="--:--" ||
                action.value==="-";
            return({
                ...bookingData,
                occasion: {value: action.value, valid: action.value!=="-"},
                submitDisabled: newSubmitDisabled
            });
        }
        case 'dinersChange': {
            return({
                ...bookingData,
                diners: action.value
            });
        }
        case 'handleSelection': {
            return({
                ...bookingData,
                seating: action.value
            });
        }
        case 'commentChange': {
            return({
                ...bookingData,
                comment: action.value
            });
        }
        default: {
            throw Error('Unknown action: '+ action.type)
        }
    }
}