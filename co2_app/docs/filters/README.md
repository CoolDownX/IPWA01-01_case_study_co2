# CO2 App Filters

In order to make the filter-system work, we first need to define on how the filter should actually work.

## Filter requirements:

The filter functionality should meet the following requirements:

- A user should be able to apply filters additively - which means that with each new filter he applies, the
  possibilities to filter other values should be reduced. For example, if someone states that he only wants to see
  companies from germany and he applies the filter to the column, the amount of companies he can select in the "Company"
  column should be reduced to the ones that are actually in germany.
- A user should be able to sort a column either in an ascending or descending manner. The sorting of the values will be
  limited to only one column at a time.

## Filter Logic:

In order to build a filter system that meets the requirements, we need to apply filters in a dynamic manner, depending
on what the user selects first. Therefore, we will have three arrays, that will be tightly coupled together. The first
array contains the values that are actually the results of the table that will be shown. The second one will be a
filter-array, that holds all filters and applies them via a for loop. The filter array will hold objects that contain
instructions on what actually should be filtered from the results array. The third array will contain a sorting
instruction - we will build it as an array to make it extensible but for now, it will be limited to just one instruction
at a time.

````mermaid
flowchart LR
    A(User applies Filter) --> B(Filter array instructions get added)
    B --> C(Filter instructions get applied)
    C --> D(Results array gets updated)
    D --> E(UI table shows updated results)
````

## Filter-Array structure:

To be able to work with dynamic filters, we have some conditions that we must meet. First, the order in which the data
gets added should not play any role. Second, the instructions can be added but also again removed from the instructions
array, so they need some kind of identifier. Furthermore, in order to make them extensible, they need to share the same
semantic so that they can be re-used for future extensions - this last point will just be done to a certain extent as it
might be a little overdone in this context.

The basic operations, that a column would need are:

- Defining the range of values in a certain column by ADDING them.

To incorporate these principles, each column should be able to apply a range of values that should be ADDED in the
resulting table as well as the possibility of sorting the values.

## Sorting-Array structure:

The instructions of the sorting array will be applied as a last step to the results-array. The responsible function will
make sure that always only one instruction is present.

### Sorting-Array object structure:

The objects of the sorting array will reference a ``column`` as well as an ``order`` and provide the values from an
Enum. As I am using TypeScript, this allows me to specify that the function only takes values that are specified in the
respective Enums.

````typescript

enum COLUMN {
    ID,
    COMPANY,
    COUNTRY,
    METRIC_TONS,
    PERCENTAGE
}

enum ORDER {
    ASC,
    DESC,
}

type instruction = {
    column: COLUMN,
    order: ORDER
}
````