using sublettr.Models;
using Nest;
using System;

namespace sublettr.DataAccess.Elastic
{
    public class ElasticClient
    {
        private const string _indexName = "sublettr";
        public static IElasticClient _elastic { get; set; }

        public static void Initialize()
        {
            _elastic = GetClient();

            // Creating the index
            _elastic.CreateIndex(_indexName, c => c
                .Settings(s => s
                    .NumberOfReplicas(1)
                    .NumberOfShards(1)));

        }

        private static IElasticClient GetClient()
        {
            var urlString = new Uri("https://4gw9bzhvmo:59vafrndit@first-cluster-2094337107.us-east-1.bonsaisearch.net"); 
            var settings = new ConnectionSettings(urlString)
                .DisableDirectStreaming()
                .DefaultIndex(_indexName);

            return new Nest.ElasticClient(settings);
        }

        public void IndexSublet(SubletType document)
        {
            _elastic.Index(document);
        }

        public void DeleteSublet(int id) {
            _elastic.Delete<SubletType>(id);
        }

        public ISearchResponse<SubletType> SearchSublets(string terms)
        {
            var result = _elastic.Search<SubletType>(s => s
                        .Index(_indexName)
                        .Query(q => BuildSubletQuery(terms)));

            return result;
        }

        private QueryContainer BuildSubletQuery(string terms)
        {
            QueryContainer query = Query<SubletType>.MultiMatch(mm => mm
                    .Query(terms)
                    .Type(TextQueryType.MostFields)
                    .Fields(f => f
                        .Field(ff => ff.Address, boost: 3)
                        .Field(ff => ff.Tags, boost: 2)
                        .Field(ff => ff.Description, boost: 1)));

            return query;
        }
    }
}