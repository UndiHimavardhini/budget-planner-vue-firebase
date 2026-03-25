import { Doughnut } from "react-chartjs-2";

export default function AnalyticsChart({repos}){

const languages = {};

repos.forEach(r=>{
if(r.language){
languages[r.language] =
(languages[r.language] || 0) + 1;
}
});

const data={
labels:Object.keys(languages),
datasets:[{data:Object.values(languages)}]
};

return(

<div className="p-6">

<h2 className="text-xl font-bold mb-4">
Language Usage
</h2>

<Doughnut data={data}/>

</div>

)

}