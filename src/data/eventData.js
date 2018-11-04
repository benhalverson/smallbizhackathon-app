import moment from 'moment';
const startDate = moment.today();
const endDate = moment(startDate, 'MM-DD-YYYY').add(1, 'days');
export const eventData = [
  {
    eventTitle: 'Hackathon',
    location: {
      address1: '123 abc st',
      address2: 'suite 150',
      city: 'Santa Clara',
      state: 'CA',
      zipCode: 95050
    },
    startDate: startDate,
    endDate: endDate,
    image: 'img.png',
    eventTags: ['meetup', 'music', 'hackathon'],
    eventType: ['music', 'network'],
    eventDescription: 'Hacking all night long',
    eventOrganizer: 'Intuit Inc',
    privacy: ['public', 'private']
  }
];
