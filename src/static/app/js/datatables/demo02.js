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
        paging: true,         //分页
        searching: true,
        ordering: true,
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
        language: {
            url: "/static/plugins/DataTables-V1.10.18/i18n/Chinese.lang"
        },
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
});