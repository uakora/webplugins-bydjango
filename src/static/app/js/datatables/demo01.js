$(document).ready(function () {
    var data_table01 = [
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ]
    ];
    $("#table_id_01").DataTable({
        paging: false,         //分页
        searching: false,
        ordering: false,
        data: data_table01

    });

    var data_table02 = [
        {
            "name":       "Tiger Nixon",
            "position":   "System Architect",
            "salary":     "$3,120",
            "start_date": "2011/04/25",
            "office":     "Edinburgh",
            "extn":       "5421"
        },
        {
            "name":       "Garrett Winters",
            "position":   "Director",
            "salary":     "$5,300",
            "start_date": "2011/07/25",
            "office":     "Edinburgh",
            "extn":       "8422"
        }
    ];
    $("#table_id_02").DataTable({
        data: data_table02,
        columns: [
            {data: "name"},
            {data: "position"},
            {data: "salary"},
            {data: "start_date"},
            {data: "office"},
            {data: "extn"},
        ]
    });

   function Employee ( name, position, salary, office ) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this._office = office;

        this.office = function () {
            return this._office;
        }
    };
    $('#table_id_03').DataTable( {
        data: [
            new Employee( "Tiger Nixon", "System Architect", "$3,120", "Edinburgh" ),
            new Employee( "Garrett Winters", "Director", "$5,300", "Edinburgh" )
        ],
        columns: [
            { data: 'name' },
            { data: 'salary' },
            { data: 'office()' },
            { data: 'position' }
        ]
    });
});