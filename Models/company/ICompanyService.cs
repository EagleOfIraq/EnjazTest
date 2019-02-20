using System.Collections.Generic;
using EnjazTest.Models.user;

namespace EnjazTest.Models.company
{
    public interface ICompanyService
    {
        Company add(Company company);
        IEnumerable<Company> GetAll();
    }
}