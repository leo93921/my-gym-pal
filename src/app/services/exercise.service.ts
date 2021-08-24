import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }
  private preWorkout = [
    {
      exercises: [{
        name: "Chair sit-up",
        reps: 15,
        type: "EXERCISE"
      }, {
        name: "Crunch seduto",
        reps: 12,
        type: "EXERCISE"
      }, {
        name: "Side plank & twist (dx)",
        reps: 8,
        type: "EXERCISE"
      }, {
        name: "Side plank & twist (sx)",
        reps: 8,
        type: "EXERCISE"
      }],
      reps: 4
    }, {
      exercises: [
        {
          name: "Bird dog",
          reps: 8,
          type: "EXERCISE"
        }
      ],
      reps: 4
    }
  ];
  private postWorkout = [
    {
      exercises: [
        {
          name: "Stretching pettorali",
          time: 30,
          type: "EXERCISE"
        },
        {
          name: "Stretching dorsali",
          time: 30,
          type: "EXERCISE"
        },
        {
          name: "Stretching deltoidi (dx)",
          time: 15,
          type: "EXERCISE"
        },
        {
          name: "Stretching deltoidi (sx)",
          time: 15,
          type: "EXERCISE"
        },
        {
          name: "Stretching tricipiti (dx)",
          time: 15,
          type: "EXERCISE"
        },
        {
          name: "Stretching tricipiti (sx)",
          time: 15,
          type: "EXERCISE"
        },
        {
          name: "Stretching avanbracci/bicipiti",
          time: 30,
          type: "EXERCISE"
        },
        {
          name: "Stretching quadricipite destro",
          time: 15,
          type: "EXERCISE"
        },
        {
          name: "Stretching quadricipite sinistro",
          time: 15,
          type: "EXERCISE"
        },
        {
          name: "Stretching tricipiti femorali",
          time: 30,
          type: "EXERCISE"
        },
        {
          name: "Stretching adduttori",
          time: 30,
          type: "EXERCISE"
        },
        {
          name: "Stretching dorsali/gran rotondo",
          time: 30,
          type: "EXERCISE"
        }
      ],
      reps: 1
    }
  ]
  private listOfExercises = [
    {
      dayOfWeek: 1,
      items: [
        ...this.preWorkout,
        {
          exercises: [
            {
              name: "Spinte panca piana (discesa slow)",
              reps: 10,
              type: "EXERCISE"
            },
          ],
          reps: 6,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Croci 30°",
              reps: 12,
              type: "EXERCISE"
            },
            {
              name: "Spinte 45°",
              reps: 8,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 60
        },
        {
          exercises: [
            {
              name: "One-Leg Push-Up (dx)",
              reps: 6,
              type: "EXERCISE"
            },
            {
              name: "Croci unilaterali (dx)",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "One-Leg Push-Up (sx)",
              reps: 6,
              type: "EXERCISE"
            },
            {
              name: "Croci unilaterali (sx)",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Press seduto",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Press front",
              reps: 8,
              type: "EXERCISE"
            }
          ],
          reps: 3,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Alzate laterali",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 10
        },
        ...this.postWorkout
      ]
    },
    {
      dayOfWeek: 3,
      items: [
        ...this.preWorkout,
        {
          exercises: [
            {
              name: "Rematore 45° (discesa lenta",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 6,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Rematore stretto",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Rematore inverso",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Trazioni",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Floor pull",
              reps: 8,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Post a 90°",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Tirate mento",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 3
        },
        {
          exercises: [
            {
              name: "Alzate laterali seduto",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 3,
          rest: 45
        },
        ...this.postWorkout
      ]
    },
    {
      dayOfWeek: 5,
      items: [
        ...this.preWorkout,
        {
          exercises: [
            {
              name: "Front Squat",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Squat isometrico",
              time: 100,
              type: "EXERCISE"
            }
          ],
          reps: 5,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Bulgarian Squat (dx)",
              reps: 8,
              type: 0
            },
            {
              name: "Bulgarian Squat (sx)",
              reps: 8,
              type: 0
            }
          ],
          reps: 3,
          rest: 45
        },
        {
          exercises: [
            {
              name: "Affondi in camminata",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 3,
          rest: 45
        },
        {
          exercises: [
            {
              name: "Stacchi",
              reps: 8,
              type: "EXERCISE"
            }, {
              name: "Leg curl isometrico",
              time: 100,
              type: "EXERCISE"
            }
          ],
          reps: 5,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Stacchi 1 gamba (dx)",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Stacchi 1 gamba (sx)",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 3,
          rest: 45
        },
        {
          exercises: [
            {
              name: "One Leg Hip Trust (sx)",
              reps: 10,
              type: "EXERCISE"
            }, {
              name: "One Leg Hip Trust (dx)",
              reps: 10,
              type: "EXERCISE"
            }, {
              name: "One Leg Hip Trust Isometrico (sx)",
              time: 100,
              type: "EXERCISE"
            }, {
              name: "One Leg Hip Trust Isometrico (dx)",
              time: 100,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        ...this.postWorkout
      ]
    },
    {
      dayOfWeek: 6,
      items: [
        ...this.preWorkout,
        {
          exercises: [
            {
              name: "French Press",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Dips",
              reps: 12,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Curl",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Curl su panca 45°",
              reps: 12,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Curl concentrato",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 45
        },
        {
          exercises: [
            {
              name: "Curl Isometrico",
              time: 100,
              type: "EXERCISE"
            }
          ],
          reps: 3
        },
        {
          exercises: [
            {
              name: "Kickback Singolo (dx)",
              reps: 15,
              type: "EXERCISE"
            },
            {
              name: "Kickback Singolo (sx)",
              reps: 15,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        {
          exercises: [
            {
              name: "Calf singolo (dx)",
              reps: 10,
              type: "EXERCISE"
            }, {
              name: "Calf singolo (sx)",
              reps: 10,
              type: "EXERCISE"
            }
          ],
          reps: 3
        },
        ...this.postWorkout
      ]
    }
  ];

  getItems(): Array<any> {
    return this.getTodayExercises();
  }

  getItem(index: number): any {
    return this.getTodayExercises()[index];
  }

  getAllItems(): any[] {
    return this.listOfExercises;
  }

  getTodayExercises() {
    const currentDate = new Date();
    const todayBag = this.listOfExercises.find(item => (item.dayOfWeek == (currentDate.getDay() + 1)))
    return todayBag ? todayBag.items : [];
  }

  getItemForSpecificDay(dayOfWeek: number) {
    const exercisesBag = this.listOfExercises.find(item => (item.dayOfWeek == (dayOfWeek)));
    return exercisesBag ? exercisesBag.items : [];
  }
}
