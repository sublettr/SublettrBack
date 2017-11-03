using System;

namespace sublettr.DataAccess
{

    public class Helpers
    {
		public static string GetRDSConnectionString()
		{

            string dbname = "dev";
            string hostname = "sublettr-dev.c1p4zrqroj56.us-east-1.rds.amazonaws.com";
            string username = "sublettr";
            string password = "sublettrdb";
            string port = "3306"; 



            return "Server=" + hostname + ";Database=" + dbname + ";Uid=" + username + ";Pwd=" + password + ";" + "Port=" + port + ";";

        }
	}
}

