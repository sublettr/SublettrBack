using System;

namespace sublettr.DataAccess
{

    public class Helpers
    {
		public static string GetRDSConnectionString()
		{
			//var appConfig = ConfigurationManager.AppSettings;

			//string dbname = appConfig["RDS_DB_NAME"];
			string dbname = "ebdb";

			if (string.IsNullOrEmpty(dbname)) return null;

			//string username = appConfig["RDS_USERNAME"];
			//string password = appConfig["RDS_PASSWORD"];
			//string hostname = appConfig["RDS_HOSTNAME"];
			//string port = appConfig["RDS_PORT"];

            
            string username = "sublettr";
            string password = "SublettrDB1";
            string hostname = "aa1ifpy5jgsf0qc.cpmnsheie0ox.us-east-2.rds.amazonaws.com";
            //string port = "3306";

			return "Data Source=" + hostname + ";Initial Catalog=" + dbname + ";User ID=" + username + ";Password=" + password + ";";
		}
	}
}

