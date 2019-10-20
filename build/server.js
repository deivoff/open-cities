!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(r,o,function(t){return e[t]}.bind(null,o));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=16)}([function(e,t){e.exports=require("tslib")},function(e,t){e.exports=require("type-graphql")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);o.__exportStar(r(11),t),o.__exportStar(r(26),t),o.__exportStar(r(27),t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);o.__exportStar(r(29),t),o.__exportStar(r(30),t),o.__exportStar(r(39),t),o.__exportStar(r(40),t),o.__exportStar(r(41),t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);o.__exportStar(r(36),t),o.__exportStar(r(37),t),o.__exportStar(r(38),t)},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("@hasezoey/typegoose")},function(e,t){e.exports=require("mongodb")},function(e,t){e.exports=require("dotenv")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);o.__exportStar(r(31),t),o.__exportStar(r(33),t),o.__exportStar(r(34),t)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=o.__importDefault(r(12)),i=o.__importDefault(r(5));r(8).config({path:i.default.join(e+"./../../../.env")}),t.isAuth=async(e,t)=>{const r=e.header.authorization;if(!r)return e.state.isAuth=!1,await t();const o=r.split(" ")[1];if(!o||""===o)return e.state.isAuth=!1,await t();let i;try{i=a.default.verify(o,process.env.SECRET_KEY)}catch(r){return e.state.isAuth=!1,await t()}return i?(e.state.isAuth=!0,e.state.decodedUser=i,await t()):(e.state.isAuth=!1,await t())},t.checkAuth=e=>{if(!e.state.isAuth)throw new Error("Unauthenticated")}}).call(this,"/")},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(6),i=o.__importDefault(r(12)),s=o.__importDefault(r(5)),n=r(1),d=r(1),p=r(7),c=r(2);r(8).config({path:s.default.join(e+"./../../../.env")});let _=class UserPhoto extends a.Typegoose{};o.__decorate([n.Field(()=>String),a.prop({required:!0}),o.__metadata("design:type",String)],_.prototype,"url",void 0),_=o.__decorate([n.ObjectType()],_),t.UserPhoto=_;let u=class GoogleProvider extends a.Typegoose{};o.__decorate([n.Field(),a.prop({required:!0}),o.__metadata("design:type",String)],u.prototype,"id",void 0),o.__decorate([n.Field(),a.prop({required:!0}),o.__metadata("design:type",String)],u.prototype,"token",void 0),u=o.__decorate([n.ObjectType()],u);let l=class UserSocial extends a.Typegoose{};o.__decorate([n.Field(()=>u),a.prop({_id:!1}),o.__metadata("design:type",u)],l.prototype,"googleProvider",void 0),l=o.__decorate([n.ObjectType()],l);let y=class UserName extends a.Typegoose{};o.__decorate([n.Field(()=>String),a.prop({required:!0}),o.__metadata("design:type",String)],y.prototype,"familyName",void 0),o.__decorate([n.Field(()=>String),a.prop({required:!0}),o.__metadata("design:type",String)],y.prototype,"givenName",void 0),y=o.__decorate([n.ObjectType()],y),t.UserName=y;let g=class User extends a.Typegoose{generateJWT(){const e=new Date,t=new Date(e);return t.setDate(e.getDate()+60),i.default.sign({email:this.email,name:this.name,photos:this.photos?this.photos:[],access:this.role,id:this._id,exp:t.getTime()/1e3},process.env.SECRET_KEY)}static async upsertGoogleUser({accessToken:e,refreshToken:r,profile:{email:o,name:a,id:i,photo:s}}){try{const r=await t.UserModel.findOne({"social.googleProvider.id":i});if(!r){return await t.UserModel.create({name:a,email:o,"social.googleProvider":{id:i,token:e},photos:[{url:s}],role:c.UserType.user})}return r}catch(e){throw e}}};o.__decorate([n.Field(()=>d.ID),o.__metadata("design:type",p.ObjectId)],g.prototype,"_id",void 0),o.__decorate([n.Field(),a.prop({required:!0}),o.__metadata("design:type",String)],g.prototype,"email",void 0),o.__decorate([n.Field(()=>y),a.prop({_id:!1}),o.__metadata("design:type",y)],g.prototype,"name",void 0),o.__decorate([n.Field(e=>c.UserType),a.prop({required:!0,enum:c.UserType}),o.__metadata("design:type",String)],g.prototype,"role",void 0),o.__decorate([n.Field(()=>[_]),a.arrayProp({items:_,_id:!1}),o.__metadata("design:type",Array)],g.prototype,"photos",void 0),o.__decorate([n.Field(()=>l),a.prop({_id:!1}),o.__metadata("design:type",l)],g.prototype,"social",void 0),o.__decorate([a.instanceMethod,o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[]),o.__metadata("design:returntype",void 0)],g.prototype,"generateJWT",null),o.__decorate([a.staticMethod,o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[Object]),o.__metadata("design:returntype",Promise)],g,"upsertGoogleUser",null),g=o.__decorate([n.ObjectType()],g),t.User=g,t.UserModel=(new g).getModelForClass(g)}).call(this,"/")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);o.__exportStar(r(28),t),o.__exportStar(r(42),t)},function(e,t){e.exports=require("graphql")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);o.__exportStar(r(43),t),o.__exportStar(r(46),t)},function(e,t,r){e.exports=r(17)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0).__importDefault(r(18)),a=r(19),i=process.env.PORT||7e3;a.createApp().then(e=>o.default.createServer(e.callback()).listen(i)).then(()=>console.log(`App listening at port: ${i}`)).catch(e=>{console.error(e),process.exit(1)})},function(e,t){e.exports=require("http")},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);r(20);const a=o.__importDefault(r(5)),i=o.__importDefault(r(21)),s=o.__importDefault(r(22)),n=o.__importDefault(r(23)),d=r(24),p=o.__importDefault(r(25)),c=r(1),_=r(2),u=r(13),l=r(3),y=r(4),g=r(15),m=o.__importDefault(r(47)),f=o.__importDefault(r(48)),h=r(9),v=r(10);r(8).config({path:a.default.join(e+"./../.env")});console.log(process.env),t.createApp=async()=>{const e=new i.default,t=new s.default;t.get("/oauth/*",h.oauthHandler);const r=await c.buildSchema({resolvers:[_.UserResolvers,u.CityResolvers,l.GeoResolvers,y.LayerResolvers,g.AuthResolvers],emitSchemaFile:!0,validate:!1});e.use(m.default({origin:"*",credentials:!0})),e.use(f.default()),e.use(async(e,t)=>{if(e.set("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, X-Requested-With, x-access-token"),e.set("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS"),"OPTIONS"===e.method)return e.status=200;await t()}),e.use(n.default()),e.use(v.isAuth);const o=new d.ApolloServer({schema:r,context:e=>e,playground:!1,introspection:!0});e.use(t.routes()),e.use(t.allowedMethods()),o.applyMiddleware({app:e,path:"/graphql"});try{await p.default.connect(`${process.env.DB_URL}`,{useNewUrlParser:!0,dbName:`${process.env.DB_NAME}`,useUnifiedTopology:!0}),console.log("MongoDB Connected")}catch(e){console.log(e)}return e}}).call(this,"/")},function(e,t){e.exports=require("reflect-metadata")},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-router")},function(e,t){e.exports=require("koa-logger")},function(e,t){e.exports=require("apollo-server-koa")},function(e,t){e.exports=require("mongoose")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1),i=r(2),s=r(11);let n=class UserResolvers{async getUsers(){try{return console.log(await s.UserModel.find()),await s.UserModel.find()}catch(e){throw e}}};o.__decorate([a.Query(e=>[i.User]),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[]),o.__metadata("design:returntype",Promise)],n.prototype,"getUsers",null),n=o.__decorate([a.Resolver(e=>i.User)],n),t.UserResolvers=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(1);var a;!function(e){e.user="user",e.researcher="researcher",e.admin="admin"}(a=t.UserType||(t.UserType={})),o.registerEnumType(a,{name:"UserType"})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1),i=r(6),s=r(7),n=r(3);let d=class City extends i.Typegoose{};o.__decorate([a.Field(()=>a.ID),o.__metadata("design:type",s.ObjectId)],d.prototype,"_id",void 0),o.__decorate([a.Field(),i.prop({required:!0}),o.__metadata("design:type",String)],d.prototype,"name",void 0),o.__decorate([a.Field(),i.prop({required:!0}),o.__metadata("design:type",String)],d.prototype,"url",void 0),o.__decorate([a.Field(),i.prop({required:!0}),o.__metadata("design:type",String)],d.prototype,"photo",void 0),o.__decorate([a.Field(e=>n.GeometryCoords),i.arrayProp({items:Array}),o.__metadata("design:type",Object)],d.prototype,"center",void 0),o.__decorate([a.Field(e=>a.Int),i.prop({required:!0}),o.__metadata("design:type",Number)],d.prototype,"zoom",void 0),d=o.__decorate([a.ObjectType()],d),t.City=d,t.CityModel=(new d).getModelForClass(d)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(1);var a;!function(e){e.Point="Point",e.MultiPoint="MultiPoint",e.LineString="LineString",e.MultiLineString="MultiLineString",e.Polygon="Polygon",e.MultiPolygon="MultiPolygon"}(a=t.GeometryType||(t.GeometryType={})),o.registerEnumType(a,{name:"GeometryType"})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1),i=r(3),s=r(9),n=r(4);let d=class GeoInput{};o.__decorate([a.Field(()=>i.Geometry),o.__metadata("design:type",i.Geometry)],d.prototype,"geometry",void 0),o.__decorate([a.Field(()=>s.GraphQLJSON),o.__metadata("design:type",Object)],d.prototype,"properties",void 0),o.__decorate([a.Field(()=>a.ID),o.__metadata("design:type",n.Layer)],d.prototype,"layer",void 0),d=o.__decorate([a.InputType()],d),t.GeoInput=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(14),a=r(32);function identity(e){return e}function ensureObject(e){if("object"!=typeof e||null===e||Array.isArray(e))throw new TypeError(`JSONObject cannot represent non-object value: ${e}`);return e}function parseObject(e,t){const r=Object.create(null);return e.fields.forEach(e=>{r[e.name.value]=parseLiteral(e.value,t)}),r}function parseLiteral(e,t){switch(e.kind){case a.Kind.STRING:case a.Kind.BOOLEAN:return e.value;case a.Kind.INT:case a.Kind.FLOAT:return parseFloat(e.value);case a.Kind.OBJECT:return parseObject(e,t);case a.Kind.LIST:return e.values.map(e=>parseLiteral(e,t));case a.Kind.NULL:return null;case a.Kind.VARIABLE:{const r=e.name.value;return t?t[r]:void 0}default:return}}t.parseLiteral=parseLiteral,t.GraphQLJSON=new o.GraphQLScalarType({name:"JSON",description:"The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",serialize:identity,parseValue:identity,parseLiteral:parseLiteral}),t.GraphQLJSONObject=new o.GraphQLScalarType({name:"JSONObject",description:"The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",serialize:ensureObject,parseValue:ensureObject,parseLiteral:parseObject})},function(e,t){e.exports=require("graphql/language")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.oauthHandler=e=>{e.body=`<script>\n  window.opener.postMessage(\n    '${e.request.query.code}',\n    '*'\n  );<\/script>`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0).__importDefault(r(35));t.isArrayExist=e=>Array.isArray(e)&&!!e.length,t.deepArrayReverse=(e,r=!0)=>{let o=e.reverse();return r&&(o=o.map(e=>t.isArrayExist(e)?t.deepArrayReverse(e,!0):e)),o},t.deepStringToNumber=(e,r=!0)=>e.map(e=>o.default(e)?Number.parseFloat(e):t.isArrayExist(e)&&r?t.deepStringToNumber(e,!0):void 0)},function(e,t){e.exports=require("lodash/isString")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(6),i=r(1),s=r(7),n=r(2),d=r(3);let p=class Layer extends a.Typegoose{};o.__decorate([i.Field(()=>i.ID),o.__metadata("design:type",s.ObjectId)],p.prototype,"_id",void 0),o.__decorate([i.Field(()=>Date),o.__metadata("design:type",Date)],p.prototype,"createdAt",void 0),o.__decorate([i.Field(()=>Date),o.__metadata("design:type",Date)],p.prototype,"updatedAt",void 0),o.__decorate([i.Field(),a.prop({required:!0}),o.__metadata("design:type",String)],p.prototype,"name",void 0),o.__decorate([i.Field(),a.prop(),o.__metadata("design:type",String)],p.prototype,"description",void 0),o.__decorate([i.Field(()=>n.User),a.prop({required:!0,ref:n.User}),o.__metadata("design:type",Object)],p.prototype,"owner",void 0),o.__decorate([i.Field(()=>n.UserType),a.prop({required:!0,enum:n.UserType}),o.__metadata("design:type",String)],p.prototype,"access",void 0),o.__decorate([i.Field(),a.prop({required:!0}),o.__metadata("design:type",String)],p.prototype,"city",void 0),o.__decorate([i.Field(()=>[n.User]),a.arrayProp({itemsRef:{name:"User"}}),o.__metadata("design:type",Object)],p.prototype,"subscribers",void 0),o.__decorate([i.Field(()=>[d.Geo]),o.__metadata("design:type",Object)],p.prototype,"geoCollection",void 0),p=o.__decorate([i.ObjectType()],p),t.Layer=p,t.LayerModel=(new p).getModelForClass(p,{schemaOptions:{timestamps:!0}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1);let i=class LayerInput{};o.__decorate([a.Field(),o.__metadata("design:type",String)],i.prototype,"name",void 0),o.__decorate([a.Field(),o.__metadata("design:type",String)],i.prototype,"description",void 0),o.__decorate([a.Field(),o.__metadata("design:type",String)],i.prototype,"city",void 0),i=o.__decorate([a.InputType()],i),t.LayerInput=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1),i=r(4),s=r(2),n=r(3),d=r(10);let p=class LayerResolvers{async layers(e,{ctx:t}){try{const{decodedUser:r}=t.state;return r?await i.LayerModel.find({access:r.access,city:e}):await i.LayerModel.find({access:s.UserType.user,city:e})}catch(e){throw e}}async createLayer(e,{ctx:t}){d.checkAuth(t);const{decodedUser:r}=t.state,o=new i.LayerModel(Object.assign(Object.assign({},e),{owner:r.id,access:r.access}));try{return await o.save()}catch(e){throw e}}async owner(e){try{const{owner:t}=e;return await s.UserModel.findById(t)}catch(e){throw e}}async geoCollection(e){try{const{_id:t}=e;return await n.GeoModel.find({layer:String(t)})}catch(e){throw e}}};o.__decorate([a.Query(e=>[i.Layer]),o.__param(0,a.Arg("city")),o.__param(1,a.Ctx()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[String,Object]),o.__metadata("design:returntype",Promise)],p.prototype,"layers",null),o.__decorate([a.Mutation(e=>i.Layer),o.__param(0,a.Arg("layerInput",e=>i.LayerInput)),o.__param(1,a.Ctx()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[i.LayerInput,Object]),o.__metadata("design:returntype",Promise)],p.prototype,"createLayer",null),o.__decorate([a.FieldResolver(()=>s.User),o.__param(0,a.Root()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[Object]),o.__metadata("design:returntype",Promise)],p.prototype,"owner",null),o.__decorate([a.FieldResolver(()=>[n.Geo]),o.__param(0,a.Root()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[Object]),o.__metadata("design:returntype",Promise)],p.prototype,"geoCollection",null),p=o.__decorate([a.Resolver(e=>i.Layer)],p),t.LayerResolvers=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(14);function parseLiteral(e,t){switch(e.kind){case o.Kind.STRING:case o.Kind.INT:case o.Kind.FLOAT:return parseFloat(e.value);case o.Kind.LIST:return e.values.map(e=>parseLiteral(e,t));case o.Kind.NULL:return null;case o.Kind.VARIABLE:{const r=e.name.value;return t?t[r]:void 0}default:return}}t.GeometryCoords=new o.GraphQLScalarType({name:"GeometryCoords",description:"Coordinates scalar type",serialize:e=>e,parseValue:e=>e,parseLiteral:parseLiteral}),t.parseLiteral=parseLiteral},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(6),i=r(1),s=r(7),n=r(2),d=r(3),p=r(9),c=r(4);let _=class Geometry{};o.__decorate([i.Field(e=>d.GeometryType),a.prop({required:!0,enum:d.GeometryType}),o.__metadata("design:type",String)],_.prototype,"type",void 0),o.__decorate([i.Field(e=>d.GeometryCoords),a.arrayProp({items:Array}),o.__metadata("design:type",Object)],_.prototype,"coords",void 0),_=o.__decorate([i.ObjectType(),i.InputType("GeometryInput")],_),t.Geometry=_;let u=class Geo extends a.Typegoose{};o.__decorate([i.Field(()=>i.ID),o.__metadata("design:type",s.ObjectId)],u.prototype,"_id",void 0),o.__decorate([i.Field(()=>Date),o.__metadata("design:type",Date)],u.prototype,"createdAt",void 0),o.__decorate([i.Field(()=>Date),o.__metadata("design:type",Date)],u.prototype,"updatedAt",void 0),o.__decorate([i.Field(()=>n.User),a.prop({required:!0,ref:n.User}),o.__metadata("design:type",Object)],u.prototype,"author",void 0),o.__decorate([i.Field(()=>c.Layer),a.prop({required:!0,ref:c.Layer}),o.__metadata("design:type",Object)],u.prototype,"layer",void 0),o.__decorate([i.Field(e=>n.UserType),a.prop({required:!0,enum:n.UserType}),o.__metadata("design:type",String)],u.prototype,"access",void 0),o.__decorate([i.Field(e=>_),a.prop({required:!0,_id:!1}),o.__metadata("design:type",_)],u.prototype,"geometry",void 0),o.__decorate([i.Field(e=>p.GraphQLJSON),a.prop(),o.__metadata("design:type",Object)],u.prototype,"properties",void 0),u=o.__decorate([i.ObjectType()],u),t.Geo=u;class GeoSum extends u{}o.__decorate([i.Field(()=>i.Float),o.__metadata("design:type",Number)],GeoSum.prototype,"sum",void 0),o.__decorate([i.Field(()=>i.Int),o.__metadata("design:type",Number)],GeoSum.prototype,"geoObjects",void 0),t.GeoSum=GeoSum,t.GeoModel=(new u).getModelForClass(u,{schemaOptions:{timestamps:!0}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1),i=r(3),s=r(2),n=r(4),d=r(10);let p=class GeoResolvers{async geos(){try{return console.log(await i.GeoModel.find()),await i.GeoModel.find()}catch(e){throw e}}async createGeo({properties:e,geometry:t,layer:r},{ctx:o}){d.checkAuth(o);const{decodedUser:a}=o.state,s=new i.GeoModel({properties:e,geometry:t,layer:r,author:a.id,access:a.access});try{return await s.save()}catch(e){throw e}}async author(e){try{const{author:t}=e;return await s.UserModel.findById(t)}catch(e){throw e}}async layer(e){try{const{layer:t}=e;return console.log(t),await n.LayerModel.findById(t)}catch(e){throw e}}};o.__decorate([a.Query(e=>[i.Geo]),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[]),o.__metadata("design:returntype",Promise)],p.prototype,"geos",null),o.__decorate([a.Mutation(e=>i.Geo),o.__param(0,a.Arg("geoInput",e=>i.GeoInput)),o.__param(1,a.Ctx()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[i.GeoInput,Object]),o.__metadata("design:returntype",Promise)],p.prototype,"createGeo",null),o.__decorate([a.FieldResolver(()=>s.User),o.__param(0,a.Root()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[Object]),o.__metadata("design:returntype",Promise)],p.prototype,"author",null),o.__decorate([a.FieldResolver(()=>n.Layer),o.__param(0,a.Root()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[Object]),o.__metadata("design:returntype",Promise)],p.prototype,"layer",null),p=o.__decorate([a.Resolver(e=>i.Geo)],p),t.GeoResolvers=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1),i=r(13);let s=class CityResolvers{async cities(){try{return await i.CityModel.find()}catch(e){throw e}}};o.__decorate([a.Query(e=>[i.City]),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[]),o.__metadata("design:returntype",Promise)],s.prototype,"cities",null),s=o.__decorate([a.Resolver(e=>i.City)],s),t.CityResolvers=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1),i=r(15),s=r(44),n=r(2);let d=class AuthResolvers{constructor(){this.googleOAuth=new s.GoogleOAuth}async getGoogleOAuthRedirect(){return{url:this.googleOAuth.urlGoogle()}}async authGoogle(e,{ctx:t}){try{const{accessToken:t,refreshToken:r,profile:o}=await this.googleOAuth.serializeAccountFromCode(e);return{token:(await n.User.upsertGoogleUser({accessToken:t,refreshToken:r,profile:o})).generateJWT()}}catch(e){return e}}};o.__decorate([a.Query(e=>i.AuthRedirect),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[]),o.__metadata("design:returntype",Promise)],d.prototype,"getGoogleOAuthRedirect",null),o.__decorate([a.Mutation(e=>i.AuthResponse),o.__param(0,a.Arg("code")),o.__param(1,a.Ctx()),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[String,Object]),o.__metadata("design:returntype",Promise)],d.prototype,"authGoogle",null),d=o.__decorate([a.Resolver(e=>i.AuthResponse)],d),t.AuthResolvers=d},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const o=r(0).__importDefault(r(5)),a=r(45);r(8).config({path:o.default.join(e+"./../../../../.env")});t.GoogleOAuth=class GoogleOAuth{constructor(){this.googleConfig={clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET,redirectUrl:process.env.GOOGLE_REDIRECT_URL},this.defaultScope=["https://www.googleapis.com/auth/plus.me","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"],this.auth=new a.google.auth.OAuth2(this.googleConfig.clientId,this.googleConfig.clientSecret,this.googleConfig.redirectUrl)}getConnectionUrl(){return this.auth.generateAuthUrl({access_type:"offline",prompt:"consent",scope:this.defaultScope})}getGooglePlusApi(){return a.google.plus({version:"v1",auth:this.auth})}urlGoogle(){return this.getConnectionUrl()}async serializeAccountFromCode(e){try{const t=(await this.auth.getToken(e)).tokens;this.auth.setCredentials(t);const r=this.getGooglePlusApi(),o=await r.people.get({userId:"me"}),a=o.data.id,i={familyName:o.data.name.familyName,givenName:o.data.name.givenName},s=o.data.image.url,n=o.data.emails[0].value;return{accessToken:t.access_token,refreshToken:t.refresh_token,profile:{id:a,email:n,name:i,photo:s}}}catch(e){throw e}}}}).call(this,"/")},function(e,t){e.exports=require("googleapis")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1);let i=class AuthResponse{};o.__decorate([a.Field(),o.__metadata("design:type",String)],i.prototype,"token",void 0),i=o.__decorate([a.ObjectType()],i),t.AuthResponse=i;let s=class AuthRedirect{};o.__decorate([a.Field(),o.__metadata("design:type",String)],s.prototype,"url",void 0),s=o.__decorate([a.ObjectType()],s),t.AuthRedirect=s},function(e,t){e.exports=require("@koa/cors")},function(e,t){e.exports=require("koa-bodyparser")}]);
//# sourceMappingURL=server.js.map