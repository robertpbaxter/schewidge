export default function () {
  this.namespace = 'client-portal-api';

  this.get('/clinicians/:id', (schema) => {
    return schema.clinicians.first();
  });

  this.get('/cpt-codes', (schema) => {
    return schema.cptCodes.all();
  });

  this.get('/offices', (schema) => {
    return schema.offices.all();
  });
}
