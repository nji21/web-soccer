import { Schedule } from "../interface/schedule";
import { team } from "../interface/team";


export const SEASON_SCHEDULE:Schedule[]=[
    {id:1,playingDate:new Date(2021,08,10),HomeTeam: 'Persija',
AwayTeam: 'Bali United',HomeScore:3,AwayScore:2,RefName:'Joko',
notes:'Pertandingan Overtime'},
{id:2,playingDate:new Date(2021,08,11),HomeTeam: 'Bantuin',
AwayTeam: 'Persipon',HomeScore:4,AwayScore:2,RefName:'Kasjo',
notes:'Pertandingan ngelek'},
{id:3,playingDate:new Date(2021,08,12),HomeTeam: 'Persis Solo',
AwayTeam: 'Permadani',HomeScore:5,AwayScore:2,RefName:'susilo',
notes:'Pertandingan Overtime'},
{id:4,playingDate:new Date(2021,08,13),HomeTeam: 'Decul',
AwayTeam: 'PSG',HomeScore:1,AwayScore:5,RefName:'Depres',
notes:'Pertandingan Lawak'},
{id:5,playingDate:new Date(2021,08,14),HomeTeam: 'Perimas',
AwayTeam: 'perahu',HomeScore:1,AwayScore:1,RefName:'paijo',
notes:'Pertandingan Gakngotak'},
]
export const TEAM:team[]=[
    {id:1,name:'Persija',type:'Over 30'},
    {id:2,name:'Bali United',type:'Over 30'},
    {id:3,name:'Bantuin',type:'Over 30'},
    {id:4,name:'Persipon',type:'Over 30'},
    {id:5,name:'Persis Solo',type:'Over 30'},
    {id:6,name:'Permadani',type:'Over 30'}
]