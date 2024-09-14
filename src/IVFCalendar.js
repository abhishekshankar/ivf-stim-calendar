// src/IVFCalendar.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
  },
});

const calendarData = [
  { day: 'Day 1', event: 'Start of Menstrual Cycle' },
  { day: 'Day 2–3', event: 'Ovarian Stimulation' },
  { day: 'Day 9–15', event: 'Trigger Injection' },
  { day: 'Day 11–17', event: 'Egg Retrieval and Fertilization' },
  { day: 'Day 12–20', event: 'Embryo Culturing' },
  { day: 'Day 21–27 (If FET)', event: 'Uterine Preparation' },
  { day: 'Day 21–49', event: 'Embryo Transfer' },
  { day: 'Day 31–63', event: 'Pregnancy Test' },
];

const IVFCalendar = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" className={classes.header}>
        IVF Calendar
      </Typography>
      <Grid container spacing={2}>
        {calendarData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6">{item.day}</Typography>
                <Typography variant="body1">{item.event}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default IVFCalendar;
