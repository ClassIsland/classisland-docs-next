# Time Layout

The time layout defines the different time points in a day, such as class periods, breaks, etc. Timetables will display the corresponding courses based on this time layout.

When a timetable using this time layout is enabled, all the defined time points will appear on the main interface, and the current time point will expand automatically based on the system time.

![1690343735712](../image/TimeLayout/1690343735712.png)

Time points have the following types:

| Type | Description |
| -- | -- |
| Class | Represents class time. This type of time point will be shown in the timetable for the corresponding time layout, and you can assign a subject to it.|
| Break | Represents break time. This type of time point will be completely hidden when collapsed and will not be shown on the main interface. |
| Divider | This time point only displays a divider line on the main interface, visually separating courses in different time periods.|

In addition, for `Class` type time points, you can set whether they are hidden by default. If default hidden is enabled, the time point will only be shown when the current time falls within it.

## Editing a Time Layout

::: note
**You cannot edit a time layout currently being used by an active timetable.**
:::

![1690343828036](../image/TimeLayout/1690343828036.png)

Let’s go through how to edit a time layout.

On the left side of the interface, you can select the time layout to edit. In the middle, you can modify the time layout. The editor has two view modes: list and timeline. You can switch between them using the buttons below. It is recommended to use the timeline view when editing.

### Create a New Time Layout

Click New Time Layout to create one. You can also click Import from Table… at the top-right corner to directly import a time layout from a table.

![1704962385766](../image/TimeLayout/1704962385766.png)

### Add Time Points

Click the add button on the toolbar to directly add a time point of the selected type. By default, the start and end times of the new time point are set to the current time. If a time point is selected, the new time point will be inserted right after it.

![1704962437551](../image/TimeLayout/1704962437551.png)

Newly inserted Class time points are 40 minutes long by default, while Break time points are 10 minutes long by default. You can change these defaults in the app settings.
![1707463956987](../image/TimeLayout/1707463956987.png)

### Edit Time Points

The details of the selected time point are shown on the right side of the view, where you can modify its settings.

When using the timeline view, you can adjust times by dragging the handles at the start and end of the selected time point. You can also use the bottom-right buttons to zoom the view.

Each Class type time point corresponds to a course in the timetable. You can set the subject for that time point. In the main interface, all Class time points are displayed by default, while Break time points are only shown when the current time is within them. You can also assign a default subject for a time point, or apply it to override the same time point across all timetables with one click.

Additionally, you can set a Class type time point to be hidden by default, making it behave like a Break time point, only showing when it is active.

Besides adding Class time points, you should also add Break time points between them to indicate break times to the software.

After adding all time points according to the school’s actual schedule, the time layout editing is complete.

### View Time Layout Information

You can click Time Layout Information to view and edit the basic information of the layout, such as its name (as shown below).

![1690344105820](../image/TimeLayout/1690344105820.png)

### Deleting Time Layouts

Click the Delete Time Layout button in the toolbar to remove a time layout. To delete a layout, it must not be used by any timetable; otherwise, it cannot be deleted.

![1707455170854](../image/TimeLayout/1707455170854.png)
