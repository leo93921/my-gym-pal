import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }

  private listOfExercises = [
    {
      dayOfWeek: 1,
      items: [
        {
          exercises: [
            {
              name: "Crunches mani unite",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Plank e tocco",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Knee to elbow",
              time: 40,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        {
          exercises: [
            {
              name: "Bird dog",
              reps: 8,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        {
          exercises: [
            {
              name: "Spinte 45°",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Push-up (sollevato)",
              reps: 100,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Push-up",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Croci 30°",
              reps: 12,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Croci alternate",
              reps: 20,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 45
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
          reps: 4,
          rest: 60
        },
        {
          exercises: [
            {
              name: "Dips",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "French press",
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
              name: "Kickack singolo",
              reps: 15,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 60
        }
      ]
    },
    {
      dayOfWeek: 3,
      items: [
        {
          exercises: [
            {
              name: "Crunches mani unite",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Plank e tocco",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Knee to elbow",
              time: 40,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        {
          exercises: [
            {
              name: "Bird dog",
              reps: 8,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        {
          exercises: [
            {
              name: "Rematore 45°",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Trazioni",
              reps: 100,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Floor pull",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Rematore inverso",
              reps: 12,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Rematore singolo (destra)",
              reps: 8,
              type: "EXERCISE"
            },
            {
              name: "Rematore singolo (sinistra)",
              reps: 8,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 45
        },
        {
          exercises: [
            {
              name: "Alzate laterali",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Alzate posteriori 90°",
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
              name: "Curl 45°",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Curl a martello",
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
              name: "Curl concentrato (destra)",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Curl concentrato (sinistra)",
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
              name: "Stretching tricipiti (sx)",
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
            }
          ],
          reps: 1
        }
      ]
    },
    {
      dayOfWeek: 5,
      items: [
        {
          exercises: [
            {
              name: "Crunches mani unite",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Plank e tocco",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Knee to elbow",
              time: 40,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        {
          exercises: [
            {
              name: "Bird dog",
              reps: 8,
              type: "EXERCISE"
            }
          ],
          reps: 4
        },
        {
          exercises: [
            {
              name: "Front Squat",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Squat isometrico",
              time: 30,
              type: "EXERCISE"
            }
          ],
          reps: 5,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Affondi avanti",
              reps: 16,
              type: 0
            }
          ],
          reps: 4,
          rest: 45
        },
        {
          exercises: [
            {
              name: "Stacchi",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Leg curl isometrico",
              time: 30,
              type: "EXERCISE"
            }
          ],
          reps: 5,
          rest: 90
        },
        {
          exercises: [
            {
              name: "Affondi dietro",
              reps: 16,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 45
        },
        {
          exercises: [
            {
              name: "Hip trust",
              reps: 10,
              type: "EXERCISE"
            },
            {
              name: "Hip trust isometrico",
              time: 30,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 45
        },
        {
          exercises: [
            {
              name: "Calf singolo",
              reps: 20,
              type: "EXERCISE"
            }
          ],
          reps: 4,
          rest: 30
        },
        {
          exercises: [
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
    const todayBag = this.listOfExercises.find(item => (item.dayOfWeek == (currentDate.getDay())))
    return todayBag ? todayBag.items : [];
  }

  getItemForSpecificDay(dayOfWeek: number) {
    const exercisesBag = this.listOfExercises.find(item => (item.dayOfWeek == (dayOfWeek)));
    return exercisesBag ? exercisesBag.items : [];
  }
}
